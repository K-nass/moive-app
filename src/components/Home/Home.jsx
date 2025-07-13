import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import Search from "../Search/Search";
import Spinner from "../Spinner/Spinner";


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=f7078bdc341259627640210003c29a20"
      )
      .then((res) => setMovies(res.data.results))
      .catch(() => setMovies([]))
      .finally(() => setIsLoading(false));
  }, []);

  function handleChangeMovie(e) {
    setSearchMovie(e.target.value);
  }

  useEffect(() => {
    setIsLoading(true);
    if (!searchMovie.trim()) {
      setIsLoading(true);
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=f7078bdc341259627640210003c29a20"
        )
        .then((res) => setMovies(res.data.results))
        .catch(() => setMovies([]))
        .finally(() => setIsLoading(false));
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f7078bdc341259627640210003c29a20&query=${searchMovie}`
      )
      .then((res) => setMovies(res.data.results))
      .catch(() => setMovies([]))
      .finally(() => setIsLoading(false));
  }, [searchMovie]);

  return (
    <div className="container mt-4">
      <Search searchMovie={searchMovie} onSearchMovie={handleChangeMovie} />
      <div className="row g-4">
        {isLoading ? (
          <Spinner />
        ) : movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Movie movie={movie} />
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center vh-50 w-100">
            <div className="text-center">
              <p className="text-muted fs-5">No movies found.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
