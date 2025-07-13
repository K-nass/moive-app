import React from "react";

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div
          className="spinner-border text-warning"
          style={{ width: "3rem", height: "3rem" }}
        ></div>
        <p className="mt-3 text-muted">Loading...</p>
      </div>
    </div>
  );
}
