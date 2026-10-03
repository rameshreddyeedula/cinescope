export const sortMovies = (movies, sortBy) => {
  const sortedMovies = [...movies];

  if (sortBy === "rating-high") {
    return sortedMovies.sort(
      (a, b) => b.vote_average - a.vote_average
    );
  }

  if (sortBy === "rating-low") {
    return sortedMovies.sort(
      (a, b) => a.vote_average - b.vote_average
    );
  }

  if (sortBy === "date-new") {
    return sortedMovies.sort((a, b) => {
      if (!a.release_date) return 1;
      if (!b.release_date) return -1;

      return (
        new Date(b.release_date) -
        new Date(a.release_date)
      );
    });
  }

  if (sortBy === "date-old") {
    return sortedMovies.sort((a, b) => {
      if (!a.release_date) return 1;
      if (!b.release_date) return -1;

      return (
        new Date(a.release_date) -
        new Date(b.release_date)
      );
    });
  }

  return sortedMovies;
};