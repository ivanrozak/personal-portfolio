// @ts-nocheck

import { ArrowLeft } from "@/component/icons";
import useContentful from "@/contentful/hooks";
import { formatDate } from "@/lib/helpers";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Chip, Image, Link } from "@nextui-org/react";
import React, { CSSProperties } from "react";
import { BLOCKS } from '@contentful/rich-text-types';

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { getArticleDetail } = useContentful();
  const entry = await getArticleDetail(params.slug || "");

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-2">{children}&nbsp;</p>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="list-disc ml-4">{children}</li>,
    }
  }

  return (
    <div className="animate-in" style={{ "--index": 1 } as CSSProperties}>
      {entry?.title === "" ? (
        <div>
          <Link href="/blog" size="sm" className="text-second flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
          <div className="mt-8">Article Not Found...</div>
        </div>
      ) : (
        <div>
          <Link href="/blog" size="sm" className="text-second flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
          <div className="text-sm text-second mt-8 mb-4">{formatDate(entry?.updatedAt)}</div>
          <h1 className="text-3xl font-semibold">{entry?.title}</h1>
          <div className="md:-mx-12">
            <Image src={entry?.heroImage} className="w-full mt-8" alt="" loading="eager" />
          </div>
          {entry?.content && (
            // @ts-ignore
            <div className="mt-8">{documentToReactComponents(entry?.content, options)}</div>
          )}
          {entry?.tags?.length && (
            <div className="flex flex-wrap gap-2 mt-8">
              {entry?.tags?.map((tag, idx) => (
                <Chip key={idx} radius="sm">{tag}</Chip>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetailPage;
