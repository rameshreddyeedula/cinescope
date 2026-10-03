import {
  useEffect,
  useMemo,
  useState,
} from "react";

import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import SortDropdown from "../components/SortDropdown";
import Filters from "../components/Filters";

import useMovies from "../hooks/useMovies";
import useFavorites from "../hooks/useFavorites";

import {
  getPopularMovies,
  getMoviesByLanguage,
} from "../services/tmdbApi";

import { sortMovies } from "../utils/movieUtils";

function Home() {
  const [searchQuery, setSearchQuery] =
    useState("");

  const [sortBy, setSortBy] =
    useState("default");

  const [language, setLanguage] =
    useState("all");

  const [browseMovies, setBrowseMovies] =
    useState([]);

  const [browseLoading, setBrowseLoading] =
    useState(true);

  const [browseError, setBrowseError] =
    useState("");

  const {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    search,
  } = useMovies();

  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const hasSearch =
    searchQuery.trim() !== "";

  useEffect(() => {
    if (hasSearch) {
      return;
    }

    const loadMovies = async () => {
      try {
        setBrowseLoading(true);
        setBrowseError("");

        let data;

        if (language === "all") {
          data = await getPopularMovies();
        } else {
          data = await getMoviesByLanguage(
            language
          );
        }

        setBrowseMovies(data.results);
      } catch (error) {
        console.error(error);

        setBrowseError(
          error.message ||
            "Failed to load movies."
        );
      } finally {
        setBrowseLoading(false);
      }
    };

    loadMovies();
  }, [language, hasSearch]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      return;
    }

    search(searchQuery, 1);
  };

  const handlePageChange = (page) => {
    search(searchQuery, page);
  };

  const searchedMovies = useMemo(() => {
    let results = [...movies];

    if (language !== "all") {
      results = results.filter(
        (movie) =>
          movie.original_language === language
      );
    }

    return sortMovies(results, sortBy);
  }, [movies, language, sortBy]);

  const displayedBrowseMovies = useMemo(
    () => {
      return sortMovies(
        browseMovies,
        sortBy
      );
    },
    [browseMovies, sortBy]
  );

  const getSectionTitle = () => {
    if (hasSearch) {
      return "Search Results";
    }

    if (language === "te") {
      return "Popular Telugu Movies";
    }

    if (language === "hi") {
      return "Popular Hindi Movies";
    }

    if (language === "en") {
      return "Popular English Movies";
    }

    return "Popular Movies";
  };

  return (
    <main className="main-content">
      <section className="hero">
        <h1>
          Discover Your Next Movie
        </h1>

        <p>
          Search, explore and discover
          movies you'll love.
        </p>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
        />
      </section>

      <section className="controls">
        <Filters
          language={language}
          setLanguage={setLanguage}
        />

        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </section>

      <h2 className="section-title">
        {getSectionTitle()}
      </h2>

      {!hasSearch && browseLoading && (
        <p className="status">
          Loading movies...
        </p>
      )}

      {!hasSearch && browseError && (
        <p className="error-message">
          {browseError}
        </p>
      )}

      {!hasSearch &&
        !browseLoading &&
        !browseError &&
        displayedBrowseMovies.length >
          0 && (
          <MovieGrid
            movies={displayedBrowseMovies.slice(
              0,
              12
            )}
            isFavorite={isFavorite}
            onToggleFavorite={
              toggleFavorite
            }
          />
        )}

      {hasSearch && loading && (
        <p className="status">
          Loading movies...
        </p>
      )}

      {hasSearch && error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {hasSearch &&
        !loading &&
        !error &&
        searchedMovies.length > 0 && (
          <MovieGrid
            movies={searchedMovies}
            isFavorite={isFavorite}
            onToggleFavorite={
              toggleFavorite
            }
          />
        )}

      {hasSearch &&
        !loading &&
        !error &&
        movies.length > 0 &&
        searchedMovies.length === 0 && (
          <p className="status">
            No movies found for this
            language.
          </p>
        )}

      {hasSearch &&
        !loading &&
        !error &&
        movies.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={
              handlePageChange
            }
          />
        )}
    </main>
  );
}

export default Home;