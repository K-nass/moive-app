import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getImageUrl } from "../../getImageUrl";
import Spinner from "../Spinner/Spinner";

// import style from './MovieDetails.module.css'

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f7078bdc341259627640210003c29a20`
      )
      .then((res) => setMovie(res.data))
      .catch(() => setMovie(null))
      .finally(() => setIsLoading(false));
  }, [id]);
  if (isLoading) return <Spinner />;
  return (
    <div className="container mt-5">
      <div className="row align-items-start g-4">
        <div className="col-md-5">
          <img
            src={getImageUrl(movie, "w500")}
            alt={movie.title}
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="col-md-7">
          <h1 className="mb-3 fw-bold">{movie.title}</h1>
          <p className="lead">{movie.overview}</p>
          <ul className="list-unstyled mt-4 d-flex">
            {movie.genres.map((item, idx) => (
              <li className="me-3 p-2 badge bg-success" key={idx}>
                {item.name}
              </li>
            ))}
          </ul>
          <ul className="list-unstyled mt-4">
            <li>
              <strong>Release Date:</strong> {movie.release_date}
            </li>
          </ul>
          <Link to={"/"} className="btn btn-outline-primary mt-3">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
