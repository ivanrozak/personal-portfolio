import { formatDate } from "@/lib/helpers";
import Link from "next/link";
import React from "react";

const ArticleList = ({ articles }: { articles: any[] | undefined }) => {
  return (
    <div className="flex flex-col gap-4">
      {articles?.map((item, idx) => (
        <div key={idx} className="flex items-center gap-8">
          <div className="text-second">{formatDate(item.updatedAt)}</div>
          <Link
            className="text-inherit hover:underline"
            href={"/blog/" + item.slug}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
