import { formatDate } from "@/lib/helpers";
import { Link } from "@nextui-org/react";
import React from "react";

const ArticleList = ({ articles }: { articles: any[] | undefined }) => {

  return (
    <>
      <div className="flex flex-col gap-4">
        {articles &&
          articles.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <div className="text-second">{formatDate(item.updatedAt)}</div>
              <Link color="foreground" href={"/blog/" + item.slug}>{item.title}</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default ArticleList;
