import { getMovieList } from "@/api/getMovieList";
import styles from "./page.module.css";
import React from "react";
import Movies from "@/components/Movies";

interface IHome {
  searchParams: { genre: string };
}

export default async function Home({ searchParams }: IHome) {
  const { genre } = searchParams;
  const data = await getMovieList(genre);

  return (
    <main className={styles.main}>
      <div className="flex items-center justify-center flex-wrap gap-3">
        {data?.results?.map((dt, i) => (
          <Movies key={i} movieData={dt}></Movies>
        ))}
      </div>
    </main>
  );
}
