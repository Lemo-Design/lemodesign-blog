import { Fragment } from 'react';
import Link from 'next/link';
import { getAllArticles, getArticlePage, getArticlePageData } from 'utils/notion';
import { Layout } from 'layouts/Layout';
import Image from 'next/image';
import { renderBlocks } from 'components/blocks/renderBlocks';
import getLocalizedDate from 'utils/getLocalizedDate';
import Container from 'components/Container';
import slugify from 'slugify';
import siteData from 'siteData';
import ArticleCard from 'components/ArticleCard';

const ArticlePage = ({
  content,
  title,
  thumbnail,
  publishedDate,
  lastEditedAt,
  summary,
  moreArticles
}) => {
  const publishedOn = getLocalizedDate(publishedDate);
  const modifiedDate = getLocalizedDate(lastEditedAt);

  const slug = slugify(title).toLowerCase();

  // const ogImage = `https://www.phung.io/api/og-image?title=${encodeURIComponent(
  //   title
  // )}&date=${encodeURIComponent(publishedOn)}`;

  const ogImage = `${siteData.websiteUrl}/api/og-image?title=${encodeURIComponent(
    title
  )}&date=${encodeURIComponent(publishedOn)}`;

  return (
      <Layout
        title={title}
        description={summary}
        imageUrl={ogImage}
        date={new Date(publishedDate).toISOString()}
        ogUrl={`/blog/${slug}`}
      >
        <div className="md:flex mx-auto w-full max-w-screen-lg md:px-0 pt-6 px-4">
          <div className="h-full w-full mb-6 md:w-1/6">
            <Link href="/" className="flex items-center gap-1 text-sm font-light group hover:opacity-50 transition-all pl-6 relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:pr-1 transition-all h-4 absolute left-0 top-[1px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              Back <span className="block md:hidden">to blog</span>
            </Link>
          </div>
          <div className="w-full md:w-4/6 text-sm">
            <div className="text-warm-gray-400 flex gap-3">
              {publishedOn}

              {publishedOn !== modifiedDate && (
                <div className="flex gap-3">
                  <span className="">-</span>
                  <span className="">Updated on {modifiedDate}</span>
                </div>
              )}
            </div>
            <h1 className="text-5xl font-bold text-white mt-6 mb-6 leading-relaxed">
              {title}
            </h1>


            <Image
              className="rounded-lg aspect-video"
              objectFit="cover"
              src={thumbnail}
              placeholder="blur"
              blurDataURL={thumbnail}
              layout="intrinsic"
              width={1200}
              height={684}
              alt={'article cover'}
              priority
            />
            <div className="font-light text-2xl text-warm-gray-500 my-6 leading-relaxed">
              {summary}
            </div>
            <div className="font-light text-sm text-warm-gray-200 blog-content">
              {content.map(block => (
                <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
              ))}
            </div>
          </div>
        </div>
        
      </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = [];
  const data: any = await getAllArticles(process.env.BLOG_DATABASE_ID);

  data.forEach(result => {
    if (result.object === 'page') {
      paths.push({
        params: {
          slug: slugify(result.properties.title.title[0].plain_text).toLowerCase()
        }
      });
    }
  });

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const data = await getAllArticles(process.env.BLOG_DATABASE_ID);

  const page = getArticlePage(data, slug);
  const result = await getArticlePageData(page, slug, process.env.BLOG_DATABASE_ID);

  return {
    props: result,
    revalidate: 60 * 60
  };
};

export default ArticlePage;
