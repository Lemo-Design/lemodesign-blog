import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import NextImage from 'next/image'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title, authors, images } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header className="mb-8 mt-32 md:flex">
            <div className="mb-12 w-full md:mb-0 md:w-2/12">
              <Link href={`/`} className="text-white">
                ← Back
              </Link>
            </div>
            <div className="w-full md:w-8/12">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="mb-6 text-sm text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div className="w-full">
                <PageTitle>{title}</PageTitle>
                <p className="my-6 flex items-center text-sm text-white">
                  <span className="bg-top-left mr-3 rounded-full bg-[url('/static/images/avatar.png')] bg-cover pl-7 pt-7"></span>
                  {authors}
                </p>
              </div>
            </div>
          </header>
          <div className="mx-auto w-full md:w-8/12" style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="mb-6 w-full overflow-hidden rounded-md bg-black">
              <picture>
                <img src={images} alt={title} className="w-full" />
              </picture>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose prose-dark max-w-none pb-8 pt-10 text-xl leading-loose">
                {children}
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
