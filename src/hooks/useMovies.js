import { useState } from "react";
import { searchMovies } from "../services/tmdbApi";

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const search = async (query, page = 1) => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await searchMovies(query, page);

      setMovies(data.results);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error(error);
      setError(error.message || "Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  return {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    search,
  };
}

export default useMovies;