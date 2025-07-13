import React from "react";
import { getImageUrl } from "../../getImageUrl";
import { Link } from "react-router-dom";
import WishlistBtn from "../WishlistBtn/WishlistBtn";
// import style from "./Movie.module.css";

export default function Movie({ movie }) {
  return (
    <div
      className="card h-100 shadow-sm movie-hover"
      style={{ transition: "transform 0.3s ease" }}
    >
      <img
        src={getImageUrl(movie, "w500")}
        className="card-img-top"
        alt={movie.title}
        style={{ objectFit: "cover", maxHeight: "350px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <Link to={`/movie/${movie.id}`} className="text-decoration-none">
            {movie.title}
          </Link>
        </h5>
        <p className="card-text text-truncate">{movie.overview}</p>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <small className="text-muted">{movie.release_date}</small>
        <WishlistBtn movie={movie} />
      </div>
    </div>
  );
}
