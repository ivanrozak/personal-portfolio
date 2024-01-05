import { Image, Link } from "@nextui-org/react";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-second">
            Here are some of the projects I've worked on.
          </p>
        </div>
      </div>
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
        <div className="flex gap-8 flex-col md:flex-row">
          <a className="md:w-2/5" href="https://sign-it.id" target="_blank">
            <Image
              src="/static/mockup_signit.jpg"
              className="aspect-video w-full"
              alt="mockup_daruma"
              isBlurred
              isZoomed
            />
          </a>
          <div className="flex flex-col gap-4 md:w-3/5">
            <div className="flex gap-2">
              <h5 className="font-medium">Sign-it</h5>
              <time className="text-second"> · 2023</time>
            </div>
            <p className="text-second">
              Developed a groundbreaking project for digital document signing,
              this platform streamlines the process of signing PDF documents.
            </p>
            <Link
              className="text-second"
              showAnchorIcon
              href="https://sign-it.id"
              target="_blank"
            >
              App preview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
