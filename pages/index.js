import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 9999

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-32 pb-8 md:space-y-5">
          <h1 className="font-bold text-white">
            Blog
            <span className="ml-3 border-l border-white pl-3 font-normal text-gray-400">
              {siteMetadata.description}
            </span>
          </h1>
        </div>
        <ul className="blog-frontpage md:grid md:grid-cols-2 md:gap-12">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            return (
              <li key={slug} className="group">
                <article className="mb-6 text-white">
                  <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                    <div className="mb-3 w-full overflow-hidden rounded-md bg-black">
                      <picture>
                        <img
                          src={images}
                          alt={title}
                          className="w-full transition-all group-hover:scale-110"
                        />
                      </picture>
                    </div>
                    <div className="my-6 flex flex-wrap text-sm text-gray-500">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <h2 className="mb-3 text-3xl font-bold transition-all group-hover:text-orange-500">
                      {title}
                    </h2>
                    <div className="intro mb-6 text-lg text-gray-400 transition-all group-hover:text-white">
                      {summary}
                    </div>
                    <div className="flex items-center">
                      <p className="flex items-center text-sm">
                        <span className="mr-3">
                          <img
                            src="/static/images/avatar.png"
                            alt="Remon de Vries"
                            width={32}
                            height={32}
                            className="overflow-hidden rounded-full"
                          />
                        </span>
                        Remon de Vries
                      </p>
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="ml-6 text-sm text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                    </div>
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href="/blog" className="" aria-label="all posts">
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center border-t border-gray-500 pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
