import ArticleList from "@/component/ArticleList";
import useContentful from "@/contentful/hooks";
import React from "react";

const BlogPage = async () => {
  const { getArticles } = useContentful();
  const articles = await getArticles();
  return (
    <div className="flex flex-col gap-24">
      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-second mt-3">{articles?.length} posts about code, design and more...</p>
        </div>
        <div className="py-12">
          {articles ? (
            <ArticleList articles={articles} />
          ) : (
            <div>Coming Soon...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
