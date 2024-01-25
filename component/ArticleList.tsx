"use client";
import { formatDate } from "@/lib/helpers";
import { Image } from "@nextui-org/react";
import React, { useState } from "react";

const ArticleList = ({ articles }: { articles: any[] | undefined }) => {

  return (
    <>
      <div className="flex flex-col">
        {articles &&
          articles.map((item, idx) => (
            <ImageRevealCursor key={idx} item={item} />
          ))}
      </div>
    </>
  );
};

const ImageRevealCursor = ({ item }: { item: any }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setHovered] = useState(false);
  const elRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };
  return (
    <div ref={elRef} onMouseMove={(e: any) => handleMouseMove(e)} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      {isHovered && (
        <div className="absolute pointer-events-none w-[100px]" style={{ left: cursorPosition.x, top: cursorPosition.y, transform: `translate(-50%, -20%)` }}>
          <Image src={item.heroImage} alt="Reveal Image" />
        </div>
      )}
      <div className="flex gap-8 items-center py-3">
        <div className="text-second">{formatDate(item.updatedAt)}</div>
        <a

          href={"/blog/" + item.slug}
        >
          <div>{item.title}</div>
        </a>
      </div>

    </div>
  )
}

export default ArticleList;
