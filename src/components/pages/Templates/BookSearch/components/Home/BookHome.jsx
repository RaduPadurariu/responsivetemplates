import React from "react";
import BookHeader from "../Header/BookHeader";
import BookSearchForm from "../SearchForm/BookSearchForm";
import { Outlet } from "react-router-dom";

const BookHome = () => {
  return (
    <main>
      <BookHeader children={<BookSearchForm />} />
      <Outlet />
    </main>
  );
};

export default BookHome;
