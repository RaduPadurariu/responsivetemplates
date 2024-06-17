import React from "react";
import BookList from "../BookList/BookList";
import Book from "../BookList/Book";

const BookDisplayPage = () => {
  return (
    <div>
      <BookList>
        <Book />
      </BookList>
    </div>
  );
};

export default BookDisplayPage;
