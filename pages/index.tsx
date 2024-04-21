import { convertToArticleList, getAllArticles, notion } from 'utils/notion';
import { Layout } from 'layouts/Layout';
import Container from 'components/Container';
import { Fragment, useState } from 'react';
import { filterArticles } from 'utils/filterArticles';
import ArticleCard from 'components/ArticleCard';
import ArticleArchive from 'components/ArticleArchive';
import siteData from 'siteData';

export default function Index(props) {
  const { articles, categories } = props;

  const [selectedTag, setSelectedTag] = useState<string>(null);
  const filteredArticles = filterArticles(articles, selectedTag);

  return (
    <Layout>
      <div className="hidden mx-auto max-w-3xl px-6 md:px-8 xl:px-3 xl:max-w-5xl mb-6 md:my-6 md:flex justify-between items-center">
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-white-alt">
            {siteData.headerTitle}
          </h1>
        </div>
      </div>
      <Container>
        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12 px-3 mb-12 md:mb-0">
          {filteredArticles.slice(0, 2).map(article => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 px-3">
          {filteredArticles.slice(2, 5).map(article => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
        <p className="mt-12 px-3 text-white-alt border-b border-primary-lighter pb-6">More news</p>
        <div className="w-full">
          {filteredArticles.slice(5, -1).map(article => (
            <ArticleArchive article={article} key={article.id} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

const fetchPageBlocks = (pageId: string) => {
  return notion.blocks.children.list({ block_id: pageId }).then(res => res.results);
};

export const getStaticProps = async () => {
  const data = await getAllArticles(process.env.BLOG_DATABASE_ID);

  const blocks = await fetchPageBlocks(data[0].id);

  const { articles, categories } = convertToArticleList(data);

  return {
    props: {
      data,
      blocks,
      articles,
      categories
    },
    revalidate: 60 * 60
  };
};
