import React, { Fragment } from 'react';
import Image from 'next/image';
import Text from 'components/blocks/Text';
import AnchorLink from 'components/blocks/AnchorLink';
import CodeBlock from 'components/blocks/CodeBlock';

export function renderBlocks(block) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p className="leading-loose mb-6 text-lg font-sans text-warm-gray-400">
          <Text text={value.text} />
        </p>
      );
    case 'heading_1':
      return (
        <div className="pt-16 text-3xl text-white-alt font-semibold">
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </div>
      );
    case 'heading_2':
      return (
        <div className="pt-8 text-2xl text-white-alt font-semibold">
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </div>
      );
    case 'heading_3':
      return (
        <div className="pt-8 text-xl text-white-alt font-semibold">
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </div>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className="text-lg">
          <Text text={value.text} />
        </li>
      );
    case 'to_do':
      return (
        <div className="text-lg">
          <label htmlFor={id} className="flex items-center justify-start space-x-3">
            <input
              id={id}
              aria-describedby={value.text}
              name={id}
              type="checkbox"
              checked={value?.checked}
              readOnly
              className="w-6 h-4 text-orange-500 border-orange-300 rounded focus:ring-orange-500 accent-orange-500"
            />
            <Text text={value.text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map(block => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption.length >= 1 ? value.caption[0].plain_text : '';
      console.log('Image src:', src);
      console.log('Image caption:', caption);
      return (
        <figure className="mt-0">
          <Image
            className="rounded-lg aspect-video"
            objectFit="cover"
            src={src}
            placeholder="blur"
            blurDataURL={src}
            width={1200}
            height={684}
            alt={caption ? caption : 'A visual depiction of what is being written about'}
            onError={(e) => console.error('Error loading image:', e)}
          />
          {caption && <figcaption className="text-center">{caption}</figcaption>}
        </figure>
      );
    case 'code':
      return (
        <CodeBlock
          language={value.language}
          caption={value.caption.length >= 1 && value.caption[0].plain_text}
          code={value.text[0].text.content}
        />
      );
    case 'callout':
      return (
        <div className="flex p-3 space-x-4 bg-[#00000075] rounded-lg border border-[#ffffff30]">
          {value.icon && <span className="text-2xl">{value.icon.emoji}</span>}
          <div className="leading-[28px] text-base text-warm-gray-400">
            <Text text={value.text} />
          </div>
        </div>
      );
    case 'table_of_contents':
      return <div>TOC</div>;
    case 'video':
      return (
        <div className="relative overflow-hidden">
          <iframe
            className="w-full h-96 md:h-[680px]"
            src={value?.external?.url || ''}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      );
    case 'quote':
      return (
        <blockquote className="p-4 border-l-4 border-warm-gray-500">
          <Text text={value.text} />
        </blockquote>
      );
    case 'divider':
      return (
        <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      );
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
}
