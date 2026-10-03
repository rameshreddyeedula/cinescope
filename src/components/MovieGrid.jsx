import MovieCard from "./MovieCard";

function MovieGrid({
  movies,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={isFavorite(movie.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default MovieGrid;