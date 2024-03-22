"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface IMovies {
  movieData: IResult;
}

const Movies: FC<IMovies> = ({ movieData }) => {
  const { backdrop_path, poster_path, title, vote_average, release_date, id } =
    movieData;
  const route = useRouter();

  return (
    <div
      className="min-w-[470px] relative imgContainer cursor-pointer"
      onClick={() => route.push(`/movie/${id}`)}
    >
      <Image
        style={{ objectFit: "cover" }}
        width={470}
        height={300}
        src={`https://image.tmdb.org/t/p/original${
          backdrop_path || poster_path
        }`}
        alt={title}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end hover:opacity-70 transition-opacity text-white">
        <div className="text-2xl font-bold">{title}</div>
        <div className="">
          {release_date?.toString()} | {vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
