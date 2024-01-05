import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-col gap-24">
      <div
        className="flex flex-col gap-8 animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-second">Posts about code, design and more...</p>
        </div>
        <div className="text-second py-12">Coming soon..</div>
      </div>
    </div>
  );
};

export default BlogPage;
