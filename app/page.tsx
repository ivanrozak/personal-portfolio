import { Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ivan Rozak</h1>
          <p className="text-second">I write code and creating things.</p>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <NextImage
            src="/static/profile.png"
            width={400}
            height={400}
            className="w-[95px] h-[95px] rounded-full profile-bg"
            alt="profile picture"
          />
          <p>
            Hi, I'm Ivan Rozak, a Fullstack Developer based in Jakarta -
            Indonesia. <br /> I love crafting both frontend interfaces and
            backend systems to create seamless digital experiences. <br /> Let's
            chat about bringing your ideas to life through code!
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            className="text-second"
            href="mailto:ivanrozack@gmail.com"
            isExternal
            showAnchorIcon
          >
            Email me
          </Link>
          <Link className="text-second" showAnchorIcon href="/about">
            More ways to connect
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p>Latest Projects</p>
        <div className="flex flex-col gap-16">
          <div className="flex gap-8 flex-col md:flex-row">
            <a className="md:w-2/5" href="https://daruma.co.id" target="_blank">
              <Image
                src="/static/mockup_daruma.jpg"
                className="aspect-video w-full"
                alt="mockup_daruma"
                isBlurred
                isZoomed
              />
            </a>
            <div className="flex flex-col gap-4 md:w-3/5">
              <div className="flex gap-2">
                <h5 className="font-medium">Daruma B2B E-Commerce</h5>
                <time className="text-second"> · 2023</time>
              </div>
              <p className="text-second">
                Developing B2B E-commerce platform where businesses can easily
                find and purchase a wide range of office tools and supplies.
              </p>
              <Link
                className="text-second"
                showAnchorIcon
                href="https://daruma.co.id"
                target="_blank"
              >
                App preview
              </Link>
            </div>
          </div>
          <div className="flex gap-8 flex-col md:flex-row">
            <a className="md:w-2/5" href="https://yesdok.com" target="_blank">
              <Image
                src="/static/mockup_yesdok.jpg"
                className="aspect-video w-full"
                alt="mockup_daruma"
                isBlurred
                isZoomed
              />
            </a>
            <div className="flex flex-col gap-4 md:w-3/5">
              <div className="flex gap-2">
                <h5 className="font-medium">YesDok</h5>
                <time className="text-second"> · 2023</time>
              </div>
              <p className="text-second">
                A health-app video call platform developed using Next.js.
                Seamlessly connecting users with healthcare professionals.
              </p>
              <Link
                className="text-second"
                showAnchorIcon
                href="https://yesdok.com"
                target="_blank"
              >
                App preview
              </Link>
            </div>
          </div>
        </div>
        <Link className="text-second underline" href="/projects">
          See All
        </Link>
      </div>
    </div>
  );
};

export default Home;
