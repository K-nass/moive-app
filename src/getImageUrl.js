export function getImageUrl(movie, size = "w500") {
  return `https://images.tmdb.org/t/p/${size}` + movie.poster_path;
}

// https://images.tmdb.org/t/p/w500/
