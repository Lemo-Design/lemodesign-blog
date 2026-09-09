# Production image for Kamal (Next.js standalone). Build: `kamal build` / `kamal deploy`.
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
# Notion credentials for SSG/ISR at build (Kamal builder.secrets → BuildKit mounts).
RUN --mount=type=secret,id=NOTION_SECRET \
    --mount=type=secret,id=BLOG_DATABASE_ID \
    export NOTION_SECRET="$(cat /run/secrets/NOTION_SECRET)" \
    && export BLOG_DATABASE_ID="$(cat /run/secrets/BLOG_DATABASE_ID)" \
    && npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
