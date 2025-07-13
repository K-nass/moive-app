import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container-fluid px-4">
        <Link to="/" className="navbar-brand fw-bold fs-3">
          Movie App
        </Link>
        <div className="d-flex align-items-center">
          <Link
            to="/wishlist"
            className="btn btn-outline-dark d-flex align-items-center gap-2 fw-medium"
          >
            <FontAwesomeIcon icon={faHeart} />
            Wishlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
