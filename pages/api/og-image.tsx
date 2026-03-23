import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Blog';
  const date = searchParams.get('date') ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 64,
          border: '2px solid #e5e7eb',
          backgroundColor: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 24, color: '#374151' }}>{date}</div>
          <div
            style={{
              marginTop: 16,
              marginBottom: 32,
              fontSize: 72,
              fontWeight: 800,
              lineHeight: '80px',
              maxWidth: 1000,
              color: '#111827',
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
