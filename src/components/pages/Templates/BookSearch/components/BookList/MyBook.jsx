import React, { useEffect, useState } from "react";
import "./BookList.css";
import { userGlobalContext } from "../../context";

const MyBook = () => {
  const { filterBooks, setResultTitle, setSearchTerm, setBooks } =
    userGlobalContext();
  useEffect(() => {
    if (filterBooks.length > 1) {
      setResultTitle("Your Search Result");
    } else {
      setResultTitle("No Search Result Found!");
    }
  }, [filterBooks]);

  useEffect(() => {
    setSearchTerm("the lost world");
  }, []);

  return (
    <>
      {filterBooks.map((myBook) => {
        return <BookItem key={myBook.id} myBook={myBook} />;
      })}
    </>
  );
};

const BookItem = ({ myBook }) => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={myBook.cover} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <div>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{myBook.title}</span>
          </div>
        </div>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{myBook.author}</span>
        </div>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Collection: </span>
          <span>{myBook.collection} </span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">No: </span>
          <span>{myBook.number} </span>
        </div>
      </div>
    </div>
  );
};

export default MyBook;
