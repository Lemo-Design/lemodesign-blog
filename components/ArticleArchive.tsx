import { Article } from 'utils/types';
import Image from 'next/image';
import slugify from 'slugify';
import getLocalizedDate from 'utils/getLocalizedDate';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();

  const formattedTime = getLocalizedDate(article.publishedDate);

  return (
    <div className="blog-item group cursor-pointer last:-mb-12 overflow-hidden">
      <a href={`/blog/${slug}`}>
        <div className="flex items-center justify-between border-b border-primary-lighter py-3 gap-6 group-hover:bg-primary-darker transition-all px-3">
          <h2 className="w-full text-lg text-white-alt transition-all group-hover:text-orange-500">{article.title}</h2>
          <div className="md:flex md:w-4/12 items-center w-full md:gap-3 my-3 order-2 md:order-2 hidden">
            {article?.categories?.map(category => (
              <div
                key={category}
                className="w-fit text-xs font-sans font-semibold tracking-wider border border-primary-lighter bg-primary-darker text-warm-gray-500 uppercase px-3 py-1 rounded-md"
              >
                {category}
              </div>
            ))}
          </div>
          <div className="flex w-fit items-center md:w-4/12 text-right text-xs text-warm-gray-500 whitespace-nowrap">
            <dl className="w-full">
              <dd className="w-full">
                <time dateTime={formattedTime}>{formattedTime}</time>
              </dd>
            </dl>
          </div>
        </div>
      </a>
    </div>
  );
}
