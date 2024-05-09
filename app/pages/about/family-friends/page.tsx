"use client";
import { Navigation } from "../../../components/nav";

import introDatas from "../../../datas/intro.json";

export default function About() {
  const data = introDatas.find(
    (item) => item.slug.toLowerCase() === "family-friends"
  )!;
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
          <div className="mx-auto space-y-8 lg:px-8 md:space-y-16 pt-16 md:pt-24 lg:pt-32">
            <div className="items-center gap-3 grid ">
              <span className="text-white text-5xl font-display">
                {data.title}
              </span>
              <div className="flex justify-center"></div>
              <div className="pb-4 z-10 flex flex-col text-white">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: data.body }}
                />
              </div>
              <div className="flex">
                <div className="pb-4 z-10 flex flex-col items-center">
                  <a
                    href={`/pages/about`}
                    className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
                  >
                    About Me
                  </a>
                </div>
                <div className="pb-4 z-10 flex flex-col items-center">
                  <a
                    href={`/pages/about/my-history`}
                    className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
                  >
                    Summary of My History
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
