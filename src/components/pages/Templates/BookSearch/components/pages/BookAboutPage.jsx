import React from "react";
import BookAbout from "../About/BookAbout";
import BookHeader from "../Header/BookHeader";
import BookSearchForm from "../SearchForm/BookSearchForm";

const BookAboutPage = () => {
  return (
    <div>
      <BookHeader children={<BookSearchForm />} />
      <BookAbout />
    </div>
  );
};

export default BookAboutPage;
