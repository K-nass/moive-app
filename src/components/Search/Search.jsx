import React from "react";

export default function Search({searchMovie,onSearchMovie}) {
  return (
    <div className="container my-3">
      <h2 className="mb-4 text-center fw-bold p-5  shadow-shadow-sm">
        Welcome to Our Movie App
      </h2>
      <form className="d-flex" role="search">
        <input
          type="search"
          className="form-control me-2"
          placeholder="Search for a movie..."
          aria-label="Search"
          onChange={onSearchMovie}
          value={searchMovie}
        />
      </form>
    </div>
  );
}
