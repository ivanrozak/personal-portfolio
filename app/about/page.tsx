import {
  ArrowLink,
  Email,
  Github,
  Instagram,
  LinkedIn,
} from "@/component/icons";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div
        className="animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <Image
          src="/static/profile.png"
          width={400}
          height={400}
          className="w-[95px] h-[95px] rounded-full profile-bg mx-auto"
          alt="profile picture"
        />
        <div className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-center">
            Ivan Rozak
          </h1>
          <p className="text-second text-center mt-4 max-w-xl mx-auto">
            Fullstack Developer based in Jakarta - Indonesia. I love crafting
            both frontend interfaces and backend systems to create seamless
            digital experiences.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col gap-4 mt-24 animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <Link className="link-container" href="mailto:ivanrozack@gmail.com">
          <div className="flex items-center gap-4">
            <Email className="w-5 h-5" />
            Email
          </div>
          <ArrowLink className="w-5 h-5" />
        </Link>
        <Link
          className="link-container"
          href="https://www.linkedin.com/in/ivan-rozak/"
        >
          <div className="flex items-center gap-4">
            <LinkedIn className="w-5 h-5" />
            LinkedIn
          </div>
          <ArrowLink className="w-5 h-5" />
        </Link>
        <Link className="link-container" href="https://github.com/ivanrozak/">
          <div className="flex items-center gap-4">
            <Github className="w-5 h-5" />
            Github
          </div>
          <ArrowLink className="w-5 h-5" />
        </Link>
        <Link
          className="link-container"
          href="https://www.instagram.com/ivanrozak"
        >
          <div className="flex items-center gap-4">
            <Instagram className="w-5 h-5" />
            Instagram
          </div>
          <ArrowLink className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
