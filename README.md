# 🎬 CineScope

CineScope is a responsive movie discovery web application built with React and the TMDB API.

Users can search for movies, explore popular movies, filter movies by language, sort results, browse through pages, and save their favorite movies.

## 🚀 Live Demo

[View CineScope Live](YOUR_NETLIFY_URL)

## 💻 GitHub Repository

[View Source Code](https://github.com/rameshreddyeedula/cinescope)

---

## ✨ Features

- 🔎 Search movies by name
- 🎬 Browse popular movies
- 🌐 Filter movies by:
  - All Languages
  - Telugu
  - Hindi
  - English
- ⭐ Sort movies by rating
- 📅 Sort movies by release date
- 📄 Pagination for search results
- ❤️ Add and remove favorite movies
- 💾 Favorites are stored using Local Storage
- ⏳ Loading states
- ⚠️ Error handling
- 📱 Responsive design
- 🧭 React Router navigation
- 🔐 API key managed using environment variables

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript (JSX)
- HTML
- CSS
- Vite

### API

- The Movie Database (TMDB) API

### Tools

- VS Code
- Git
- GitHub
- Netlify

---

## 📂 Project Structure

```text
cinescope/
│
├── public/
│   └── _redirects
│
├── src/
│   ├── components/
│   │   ├── EmptyState.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Filters.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── Pagination.jsx
│   │   ├── SearchBar.jsx
│   │   └── SortDropdown.jsx
│   │
│   ├── hooks/
│   │   ├── useMovies.js
│   │   └── useFavorites.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Favorites.jsx
│   │
│   ├── services/
│   │   └── tmdbApi.js
│   │
│   ├── utils/
│   │   └── movieUtils.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── eslint.config.js
├── vite.config.js
└── README.md
