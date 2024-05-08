"use client";
import { Navigation } from "../components/nav";
import aboutDatas from "../datas/about.json";

export default function About() {
  const data = aboutDatas.find(
    (item) => item.slug.toLowerCase() === "introduction"
  )!;
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="max-w-2xl mx-auto my-4 lg:mx-0">
          <h2
            className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
            style={{ marginTop: "75px" }}
          >
            {data.title}
          </h2>
          <p className="mt-4 text-zinc-400" dangerouslySetInnerHTML={{ __html: data.body }}/>
            
          <div className="flex mt-4">
            <div className="pb-4 z-10 flex flex-col items-center">
              <a
                href={`/blog/about-family-and-friends`}
                className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
              >
                Introduction to Family and Friends
              </a>
            </div>
            <div className="pb-4 z-10 flex flex-col items-center">
              <a
                href={`/about/history`}
                className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
              >
                Summary of My History
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
