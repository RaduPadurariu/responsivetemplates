import React from "react";
import { userGlobalContext } from "../../context";

import "./BookList.css";

const BookList = ({ children }) => {
  const { resultTitle } = userGlobalContext();

  return (
    <section className="bookList">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="bookList-content">{children}</div>
      </div>
    </section>
  );
};

export default BookList;
