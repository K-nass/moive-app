import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Movie from "../Movie/Movie";
import Search from "../Search/Search";
import Spinner from "../Spinner/Spinner";

const initialState = {
  movies: [],
  searchMovie: "",
  isLoading: true,
};

function reducer(state, action) {
switch (action.type) {
  case "SET_MOVIES":
    return { ...state, movies: action.payload };
  case "SET_LOADING":
    return { ...state, isLoading: action.payload };
  case "SET_SEARCH":
    return { ...state, searchMovie: action.payload };
  default:
    return state;
}
}
export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, searchMovie, isLoading } = state;

useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=f7078bdc341259627640210003c29a20"
      )
      .then((res) => dispatch({ type: "SET_MOVIES", payload: res.data.results }))
      .catch(() => dispatch({ type: "SET_MOVIES", payload: [] }))
      .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });

    if (!searchMovie.trim()) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=f7078bdc341259627640210003c29a20"
        )
        .then((res) => dispatch({ type: "SET_MOVIES", payload: res.data.results }))
        .catch(() => dispatch({ type: "SET_MOVIES", payload: [] }))
        .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
      return;
    }

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f7078bdc341259627640210003c29a20&query=${searchMovie}`
      )
      .then((res) => dispatch({ type: "SET_MOVIES", payload: res.data.results }))
      .catch(() => dispatch({ type: "SET_MOVIES", payload: [] }))
      .finally(() => dispatch({ type: "SET_LOADING", payload: false }));
  }, [searchMovie]);

  function handleChangeMovie(e) {
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
  }
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
