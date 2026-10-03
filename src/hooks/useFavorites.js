import { useEffect, useState } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("cinescope-favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cinescope-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((currentFavorites) => {
      const isFavorite = currentFavorites.some(
        (favorite) => favorite.id === movie.id
      );

      if (isFavorite) {
        return currentFavorites.filter(
          (favorite) => favorite.id !== movie.id
        );
      }

      return [...currentFavorites, movie];
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some(
      (favorite) => favorite.id === movieId
    );
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}

export default useFavorites;