import MovieGrid from "../components/MovieGrid";
import useFavorites from "../hooks/useFavorites";

function Favorites() {
  const {
    favorites,
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  return (
    <main className="main-content">
      <section className="favorites-page">
        <h1 className="section-title">
          Your Favorites ♥
        </h1>

        {favorites.length === 0 ? (
          <p className="status">
            You haven't added any favorites yet.
          </p>
        ) : (
          <MovieGrid
            movies={favorites}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </section>
    </main>
  );
}

export default Favorites;