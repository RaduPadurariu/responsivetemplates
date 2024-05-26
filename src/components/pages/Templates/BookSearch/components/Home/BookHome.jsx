import React from "react";
import BookHeader from "../Header/BookHeader";
import BookSearchForm from "../SearchForm/BookSearchForm";

const BookHome = () => {
  return (
    <main>
      <BookHeader children={<BookSearchForm />} />
    </main>
  );
};

export default BookHome;
