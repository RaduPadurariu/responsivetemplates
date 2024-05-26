import React from "react";
import BookHeader from "../Header/BookHeader";
import BookSearchForm from "../SearchForm/BookSearchForm";
import BookList from "../BookList/BookList";
import Book from "../BookList/Book";

const BookDisplayPage = () => {
  return (
    <div>
      <BookHeader>
        <BookSearchForm />
      </BookHeader>
      <BookList>
        <Book />
      </BookList>
    </div>
  );
};

export default BookDisplayPage;
