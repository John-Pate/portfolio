"use client";
import { Navigation } from "../../components/nav";
import aboutDatas from "../../datas/about.json";
import { HistoryItem } from "@/app/models/HistoryModel";

export default function History() {
  const data = aboutDatas.find(
    (item) => item.slug.toLowerCase() === "my-history"
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
          <div className="mt-4">
            {data.items.map((item: HistoryItem, index: number) => (
              <div className="relative pl-8 sm:pl-32 py-6 group" key={index}>
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                  {item.titile}
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold w-20 h-7 mb-3 sm:mb-0 text-sky-600 border border-sky-500 rounded-full">
                    {item.time}
                  </time>
                  <div className="text-xl font-bold text-zinc-400">
                    {item.location}
                  </div>
                </div>
                <div className="text-slate-400">{item.content}</div>
              </div>
            ))}
          </div>
          <div className="flex mt-4">
            <div className="pb-4 z-10 flex flex-col items-center">
              <a
                href={`/about`}
                className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
              >
                About Me
              </a>
            </div>
            <div className="pb-4 z-10 flex flex-col items-center">
              <a
                href={`/blog/about-family-and-friends`}
                className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
              >
                Introduction to Family and Friends
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
