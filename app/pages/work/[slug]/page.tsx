"use client";
import "./mdx.css";
import { Header } from "./header";
import { ReportView } from "./view";
import datas from "../../../datas/work.json";

type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: Props) {
  const slug = params?.slug;

  const data = datas.find((blog) => blog.slug.toLowerCase() === `${slug}`)!;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={data} />
      <div className="container flex md:justify-center min-h-screen px-4 mx-auto text-black	">
        <div className="flex justify-center mt-10 mx-auto py-5 px-3">
          <div className="mx-auto max-w-2xl lg:mx-0 block">
            <p>{data.body}</p>
            <div className="mx-auto max-w-2xl lg:mx-0 block mt-3">
              <div
                className="work-items"
                dangerouslySetInnerHTML={{ __html: data.list_items }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
