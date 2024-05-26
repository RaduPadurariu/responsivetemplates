import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { userGlobalContext } from "../../context";
import "./BookSearchForm.css";

const BookSearchForm = () => {
  const { setSearchTerm, setResultTitle } = userGlobalContext();

  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ... ");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/bookSearch/book");
  };
  return (
    <div className="bookSearch-form">
      <div className="container">
        <div className="search-form-content">
          <form action="" className="bookSearch-form" onSubmit={handleSubmit}>
            <div className="bookSearch-form-elem flex flex-ac flex-sb bg-white">
              <input
                type="text"
                className="bookSearch-form-control"
                placeholder="The Lost World ..."
                ref={searchText}
              />
              <button
                type="submit"
                className="flex flex-c"
                onClick={handleSubmit}
              >
                <FaSearch className="text-purple" size={32}></FaSearch>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookSearchForm;
