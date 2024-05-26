import React from "react";
import BookHeader from "../Header/BookHeader";
import BookList from "../BookList/BookList";
import MyBook from "../BookList/MyBook";
import BookMySearchForm from "../SearchForm/BookMySearchForm";

const BookMyBooksPage = () => {
  return (
    <div>
      <BookHeader>
        <BookMySearchForm />
      </BookHeader>
      <BookList>
        <MyBook />
      </BookList>
    </div>
  );
};

export default BookMyBooksPage;
