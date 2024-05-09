"use client";
import { Navigation } from "../../../components/nav";
import datas from "../../../datas/blog.json";

type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: Props) {
  const slug = params?.slug;

  const featured = datas.find(
    (blog) => blog.slug.toLowerCase() === `${slug}`
  )!;
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
      <div className="mx-auto space-y-8 lg:px-8 md:space-y-16 pt-16 md:pt-24 lg:pt-32">
        <div className="items-center gap-3 grid ">
          {/* <div className="pb-4 z-10 flex flex-col items-center">
            <a
              href={`/blog`}
              className="text-white	border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black	 "
            >
              View All Blogs
            </a>
          </div> */}
          <span className="text-white text-5xl font-display">
            {featured.title}
          </span>
          <div className="flex justify-center">
            {/* <img
              src={featured.featured_image || undefined}
              className="h-1/4w-1/4 min-h-3.5place-self-center rounded-lg"
            ></img> */}
          </div>
          <div className="pb-4 z-10 flex flex-col text-white">
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: featured.body }} />
          </div>
          {slug !== "about-family-and-friends" ? (
            <div className="pb-4 z-10 flex flex-col items-center">
              <a
                href={`/pages/blog`}
                className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
              >
                View All Blogs
              </a>
            </div>
          ) : (
            <div className="flex">
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
                  href={`/about/history`}
                  className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
                >
                  Summary of My History
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
