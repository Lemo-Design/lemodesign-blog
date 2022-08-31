import Link from '@/components/Link'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="space-y-2 pt-32 pb-8 md:space-y-5">
        <h1 className="font-bold text-white">
          <Link href={`/`} aria-label={`Blog`}>
            Blog
          </Link>
          <span className="ml-3 border-l border-white pl-3 font-normal text-gray-400">
            {siteMetadata.description}
          </span>
        </h1>
      </div>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
