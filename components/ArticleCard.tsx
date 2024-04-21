import { Article } from 'utils/types';
import Image from 'next/image';
import slugify from 'slugify';
import getLocalizedDate from 'utils/getLocalizedDate';
import Link from 'next/link';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();

  const formattedTime = getLocalizedDate(article.publishedDate);

  return (
    <div className="blog-item group cursor-pointer md:mb-12 relative hover:scale-[96%] md:scale-[95%] transition-all">
      <Link href={`/blog/${slug}`}>
        <div className="scale-105 group-hover:scale-110 transition-all">
          <div className="bg-gradient-to-t from-primary-darker absolute h-full w-full z-20 opacity-70"></div>
          <div
            className="aspect-square rounded-md"
            style={{ 
              backgroundImage: `url(${article.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
        <div className="absolute z-30 bottom-0 md:p-6 p-0 py-3">
          <div className="mb-3">
            {article?.categories?.map(category => (
              <div
                key={category}
                className="w-fit text-xs text-white opacity-50 uppercase"
              >
                {category}
              </div>
            ))}
          </div>
          <h2 className="mb-3 text-3xl font-bold transition-all">{article.title}</h2>
          <div className="flex items-center">
            <dl>
              <dd className="text-sm text-white opacity-50 font-light">
                <time dateTime={formattedTime}>{formattedTime}</time>
              </dd>
            </dl>
          </div>
        </div>
      </Link>
    </div>
  );
}
