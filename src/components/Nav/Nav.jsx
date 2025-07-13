import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="container-fluid bg-warning d-flex justify-content-between align-items-center p-2">
        <Link to="/" className="navbar-brand text-dark fw-bold fs-4 ms-3">
          Movie App
        </Link>
        <Link to="/wishlist" className="text-dark fs-5 text-decoration-none me-3">
          <FontAwesomeIcon icon={faHeart} /> Wishlist
        </Link>
      </div>
    </nav>
  );
}
