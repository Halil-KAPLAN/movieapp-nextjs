import { getSearchMovie } from "@/api/getSearchMovie";
import Movies from "@/components/Movies";
import { NextPage } from "next";
import React from "react";

interface ISearchPageParams {
  params: { keyword: string };
}

const Page: NextPage<ISearchPageParams> = async ({ params }) => {
  const { keyword } = params;
  const { results } = await getSearchMovie(keyword);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {results.length === 0 ? (
        <div className="text-3xl">Movie not found!</div>
      ) : (
        results?.map((dt, i) => <Movies key={i} movieData={dt}></Movies>)
      )}
    </div>
  );
};

export default Page;
