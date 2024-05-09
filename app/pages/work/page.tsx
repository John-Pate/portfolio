"use client";
import Link from "next/link";
import { Navigation } from "@/app/components/nav";
import { Card } from "@/app/components/card";
import { useEffect, useState } from "react";

import { WorkItem } from "@/app/models";

import workDatas from "@/app/datas/work.json";

export default function Example() {
  const [isLoading, setIsLoading] = useState(true);
  const [introData, setIntroData] = useState<WorkItem[]>([]);

  useEffect(() => {
    setIntroData(workDatas as unknown as WorkItem[]);
    setIsLoading(false);
  }, []);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Work
          </h2>
          <p className="mt-4 text-zinc-400">
            A compilation of my work and development projects, reflecting a
            fusion of creativity, expertise, and a relentless drive for
            innovation.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {isLoading && (
          <div className="text-white block mx-auto">Loading...</div>
        )}
        <div className="w-full grid md:grid-cols-3 gap-5">
          {introData &&
            introData.map((project: WorkItem, index: number) => {
              return (
                <Card key={index}>
                  <Link href={`/pages/work/${project.slug}`}>
                    <article className="p-4 md:p-8 flex flex-col justify-between">
                      <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                        {project.title}
                      </h2>
                      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {project.summary}
                      </p>
                      <p
                        className="z-20 mt-6 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200"
                      >
                        Learn More <span aria-hidden="true">&rarr;</span>
                      </p>
                    </article>
                  </Link>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
