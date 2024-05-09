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
        <h1 className="text-4xl font-bold text-white">Blog</h1>
        <p className="text-lg text-gray-300">
          It is a collection of my thoughts, ideas, and experiences.
        </p>
        {isLoading && <div className="text-white block mx-auto">Loading...</div>}
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/pages/about`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  id="top1-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {top1?.seo_title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {top1?.summary}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {top2 && top3 && [top2, top3].filter(Boolean).map((blog: IntroItem, index: number) => (
              <Link href={`/pages/about/${blog?.slug}`} key={index}>
                <Card key={blog.slug}>
                  <article className="p-4 md:p-8">
                    <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {blog?.seo_title}
                    </h2>
                    <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {blog?.summary}
                    </p>
                    <p className="mt-2 text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </article>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-300">Filter by category:</p>
        <ul className="items-center w-full text-sm font-medium text-gray-900 border border-gray-200 rounded-lg sm:flex dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="1"
                name="first"
                type="checkbox"
                checked={filterBy.first}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              ></input>
              <label
                htmlFor="vue-checkbox-list"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Monthly
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="2"
                name="second"
                type="checkbox"
                checked={filterBy.second}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              ></input>
              <label
                htmlFor="react-checkbox-list"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Travel
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="3"
                name="third"
                type="checkbox"
                checked={filterBy.third}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              ></input>
              <label
                htmlFor="react-checkbox-list"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Technology
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="4"
                name="fourth"
                type="checkbox"
                checked={filterBy.fourth}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              ></input>
              <label
                htmlFor="react-checkbox-list"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Reading
              </label>
            </div>
          </li>
        </ul>

        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {filteredBlogs && filteredBlogs.map((blog: BlogItem, index: number) => (
            <Card key={index}>
              <Article blog={blog} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
