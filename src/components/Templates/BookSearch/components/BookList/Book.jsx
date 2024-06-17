import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import { userGlobalContext } from "../../context";
import coverImg from "/images/BookSearch/cover_not_found.jpg";
import BookLoader from "../Loader/BookLoader";
const Book = () => {
  const { books, loading } = userGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,

      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });
  return (
    <>
      {loading ? (
        <BookLoader />
      ) : (
        booksWithCovers.slice(0, 30).map((book, index) => {
          return <BookItem key={index} book={book} />;
        })
      )}
    </>
  );
};

const BookItem = ({ book }) => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/bookSearch/home/book/${book.id}`} {...book}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
        </Link>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{book.author ? book.author.join(", ") : "No Author"}</span>
        </div>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Total Editions: </span>
          <span>{book.edition_count} </span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">First Publish Year: </span>
          <span>{book.first_publish_year} </span>
        </div>
      </div>
    </div>
  );
};

export default Book;
