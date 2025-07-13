import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

export default function WishlistBtn() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClickBtn() {
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <button
      className="btn w-25 text-decoration-none bg-transparent border-0"
      onClick={handleClickBtn}
    >
      <FontAwesomeIcon
        icon={isClicked ? faSolidHeart : faRegularHeart}
        className={isClicked ? "text-warning" : "text-dark"}
      />
    </button>
  );
}
