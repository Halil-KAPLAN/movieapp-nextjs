import { getMovieDetail } from "@/api/getMovieDetail";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface IMoviePageParams {
  params: { id: string };
}

const Page: NextPage<IMoviePageParams> = async ({ params }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
  } = await getMovieDetail(params.id);

  return (
    <div className="relative p-7 min-h-screen text-white">
      <Image
        style={{ objectFit: "cover", objectPosition: "top " }}
        fill
        src={`https://image.tmdb.org/t/p/original${
          poster_path || backdrop_path
        }`}
        alt={title}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{title}</div>
        <div className="w-1/2">{overview}</div>
        <div className="my-3">
          {release_date.toString()} | {vote_average}
        </div>
        <div className="my-2 border w-32 p-2 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-black selection:bg-transparent">
          Trial
        </div>
      </div>
    </div>
  );
};

export default Page;
