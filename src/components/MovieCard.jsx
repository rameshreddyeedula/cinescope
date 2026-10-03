function MovieCard({
  movie,
  isFavorite,
  onToggleFavorite,
}) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div className="movie-card">
      <div className="movie-poster-container">
        <img
          src={imageUrl}
          alt={movie.title}
        />
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <div className="movie-details">
          <div>
            <p className="movie-rating">
              ⭐ {movie.vote_average.toFixed(1)}
            </p>

            <p className="movie-date">
              {movie.release_date ||
                "Release date unavailable"}
            </p>
          </div>

          <button
            className={`favorite-button ${
              isFavorite ? "favorite-active" : ""
            }`}
            onClick={() => onToggleFavorite(movie)}
            aria-label={
              isFavorite
                ? `Remove ${movie.title} from favorites`
                : `Add ${movie.title} to favorites`
            }
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;