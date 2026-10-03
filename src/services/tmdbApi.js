const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query, page = 1) => {
  if (!API_KEY) {
    throw new Error("TMDB API key is missing.");
  }

  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}&page=${page}`
    );

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(
        errorData.status_message ||
          `API Error: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("TMDB Search Error:", error);
    throw error;
  }
};

export const getPopularMovies = async (page = 1) => {
  if (!API_KEY) {
    throw new Error("TMDB API key is missing.");
  }

  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(
        errorData.status_message ||
          `API Error: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("TMDB Popular Movies Error:", error);
    throw error;
  }
};

export const getMoviesByLanguage = async (
  language,
  page = 1
) => {
  if (!API_KEY) {
    throw new Error("TMDB API key is missing.");
  }

  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${language}&sort_by=popularity.desc&page=${page}`
    );

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(
        errorData.status_message ||
          `API Error: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("TMDB Language Error:", error);
    throw error;
  }
};