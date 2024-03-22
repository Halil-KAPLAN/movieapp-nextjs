import { API_BASE_URL } from "./helpers/constants";
import { options } from "./helpers/fetchOption";

export const getSearchMovie = async (keyword: string): Promise<IMovieList> => {
  const url = `${API_BASE_URL}/search/movie?query=${keyword}&language=en-US&page=1`;

  const res = await fetch(url, options);
  return await res.json();
};
