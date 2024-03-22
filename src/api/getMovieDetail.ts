import { API_BASE_URL } from "./helpers/constants";
import { options } from "./helpers/fetchOption";

export const getMovieDetail = async (id: string): Promise<Movie> => {
  const url = `${API_BASE_URL}/movie/${id}?language=en-US`;

  const res = await fetch(url, options);
  return await res.json();
};
