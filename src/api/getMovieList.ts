import { API_BASE_URL } from "./helpers/constants";
import { options } from "./helpers/fetchOption";

export const getMovieList = async (genre: string): Promise<IMovieList> => {
  const url = `${API_BASE_URL}/${
    genre ? "movie/" + genre : "trending/all/day"
  }?language=en-US&page=1`;

  const res = await fetch(url, options);
  return await res.json();
};
