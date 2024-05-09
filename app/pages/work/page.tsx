"use client";
import Link from "next/link";
import { Navigation } from "@/app/components/nav";
import { Card } from "@/app/components/card";
import { useEffect, useState } from "react";
import { Article } from "@/app/components/article";

import { IntroItem, BlogItem } from "@/app/models";

import introDatas from "@/app/datas/intro.json";
import blogDatas from "@/app/datas/blog.json";

export default function Example() {
  const [isLoading, setIsLoading] = useState(true);
  const [introData, setIntroData] = useState<IntroItem[]>([]);
  const [blogData, setBlogData] = useState<BlogItem[]>([]);
  const [filterBy, setFilterBy] = useState<{
    first: boolean;
    second: boolean;
    third: boolean;
    fourth: boolean;
  }>({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  useEffect(() => {
    setIntroData(introDatas as unknown as IntroItem[]);
    setBlogData(blogDatas as unknown as BlogItem[]);
    setIsLoading(false);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setFilterBy((prevState) => ({
      ...prevState,
      [name]: !prevState[name as keyof typeof prevState],
    }));
  };

  const top1 = introData.find(
    (blog) => blog.slug.toLowerCase() === "introduction"
  )!;
  const top2 = introData.find(
    (blog) => blog.slug.toLowerCase() === "family-friends"
  )!;
  const top3 = introData.find(
    (blog) => blog.slug.toLowerCase() === "my-history"
  )!;
  const filteredBlogs = blogData
    .filter(
      (blog) =>
        blog.slug !== top1?.slug &&
        blog.slug !== top2?.slug &&
        blog.slug !== top3?.slug
    )
    .filter((blog) => {
      if (
        filterBy.first &&
        filterBy.second &&
        filterBy.third &&
        filterBy.fourth
      ) {
        return true;
      } else if (filterBy.first) {
        return blog.categories[0]?.name === "monthly";
      } else if (filterBy.second) {
        return blog.categories[0]?.name === "travel";
      } else if (filterBy.third) {
        return blog.categories[0]?.name === "tech";
      } else if (filterBy.fourth) {
        return blog.categories[0]?.name === "reading";
      }
      return true;
    });
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="px-6 pt-20 pb-10 mx-auto space-y-3 max-w-7xl lg:px-8 md:space-y-4 md:pt-24 lg:pt-32">
        <h1 className="text-4xl font-bold text-white">Work</h1>
        <p className="text-lg text-gray-300">
          A compilation of my work and development blogs, reflecting a fusion of
          creativity, expertise, and a relentless drive for innovation.
        </p>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {filteredBlogs &&
            filteredBlogs.map((blog: BlogItem, index: number) => (
              <Link href={`/work/${blog.slug}`} key={index}>
                <Card>
                  <article className="p-4 md:p-8 flex flex-col justify-between">
                    <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {blog.seo_title}
                    </h2>
                    <p className="mt-4 text-zinc-400">
                      A compilation of my work and development projects,
                      reflecting a fusion of creativity, expertise, and a
                      relentless drive for innovation.
                    </p>
                    <Link
                      href={`/work/${blog.slug}`}
                      className="z-20 mt-6 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200"
                    >
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </article>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
