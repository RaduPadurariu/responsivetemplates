import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { userGlobalContext } from "../../context";
import "./BookSearchForm.css";

const BookMySearchForm = () => {
  const { setFilterTerm, filterTerm, setResultTitle } = userGlobalContext();
  console.log(filterTerm);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase(); // Get the input value
    setFilterTerm(searchTerm); // Update filterTerm in context
    setResultTitle(""); // Reset resultTitle when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = filterTerm.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setResultTitle("Please Enter Something ... ");
    } else {
      setResultTitle(""); // Reset resultTitle before searching
      navigate("/bookSearch/myBook");
    }
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
                placeholder="Search book ..."
                value={filterTerm}
                onChange={handleInputChange} // Update filterTerm as the user types
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

export default BookMySearchForm;
