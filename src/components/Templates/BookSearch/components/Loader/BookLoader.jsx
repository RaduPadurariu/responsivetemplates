import React from "react";
import LoaderImg from "/images/BookSearch/loader.svg";
import "./BookLoader.css";

const BookLoader = () => {
  return (
    <div className="bookLoader flex flex-c">
      <img src={LoaderImg} alt="loader" />
    </div>
  );
};

export default BookLoader;
