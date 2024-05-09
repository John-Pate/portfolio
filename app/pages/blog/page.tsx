"use client";
import Link from "next/link";
import { Navigation } from "@/app/components/nav";
import { Card } from "@/app/components/card";
import { useEffect, useState } from "react";
import { Article } from "@/app/components/article";

import { IntroItem, BlogItem, OptionItem } from "@/app/models";

import introDatas from "@/app/datas/intro.json";
import blogDatas from "@/app/datas/blog.json";
import optionsData from "@/app/datas/options.json";

export default function Example() {
  const [isLoading, setIsLoading] = useState(true);
  const [introData, setIntroData] = useState<IntroItem[]>([]);
  const [blogData, setBlogData] = useState<BlogItem[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    setIntroData(introDatas as unknown as IntroItem[]);
    setBlogData(blogDatas as unknown as BlogItem[]);
    setIsLoading(false);
  }, []);

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
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

  const filteredBlogs =
    selectedOptions.length > 0
      ? blogData.filter((item) =>
          selectedOptions.some((option) =>
            item.categories[0]?.name.includes(option)
          )
        )
      : blogData;
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="px-6 pt-20 pb-10 mx-auto space-y-3 max-w-7xl lg:px-8 md:space-y-4 md:pt-24 lg:pt-32">
        <h1 className="text-4xl font-bold text-white">Blog</h1>
        <p className="text-lg text-gray-300">
          It is a collection of my thoughts, ideas, and experiences.
        </p>
        {isLoading && (
          <div className="text-white block mx-auto">Loading...</div>
        )}
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
            {top2 &&
              top3 &&
              [top2, top3]
                .filter(Boolean)
                .map((blog: IntroItem, index: number) => (
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
          {optionsData.map((option: OptionItem, index: number) => (
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600" key={index}>
              <div className="flex items-center ps-3">
                <input
                  id={option.id}
                  name={option.value}
                  type="checkbox"
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                ></input>
                <label
                  htmlFor="vue-checkbox-list"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {option.label}
                </label>
              </div>
            </li>
            ))}
        </ul>

        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {filteredBlogs &&
            filteredBlogs.map((blog: BlogItem, index: number) => (
              <Card key={index}>
                <Article blog={blog} />
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
