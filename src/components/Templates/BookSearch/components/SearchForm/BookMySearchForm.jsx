import React, { useEffect, useState } from "react";

import { userGlobalContext } from "../../context";
import collectionList from "./CollectionList";
import "./BookSearchForm.css";
import CollectionItem from "./CollectionItem";
import MyBookList from "../BookList/MyBooksList";

const BookMySearchForm = () => {
  const { filterBooks, setFilterBooks } = userGlobalContext();

  const [filterTerm, setFilterTerm] = useState("");
  const [collectionName, setCollectionName] = useState("All books");
  const [toggleFilterMenu, setToggleFilterMenu] = useState(false);
  const handleFilterMenu = () => setToggleFilterMenu(!toggleFilterMenu);

  const handleInputChange = (e) => {
    const searchName = e.target.value.toLowerCase(); // Get the input value
    setFilterTerm(searchName);
  };

  const setCollection = (name) => {
    setCollectionName(name);
  };

  useEffect(() => {
    setFilterBooks(() => {
      if (collectionName === "All books")
        return MyBookList.filter((el) => {
          return (
            el.author.toLowerCase().includes(filterTerm) ||
            el.title.toLowerCase().includes(filterTerm)
          );
        });
      else
        return MyBookList.filter((el) => {
          return (
            collectionName === el.collection &&
            (el.author.toLowerCase().includes(filterTerm) ||
              el.title.toLowerCase().includes(filterTerm))
          );
        });
    });
  }, [collectionName, filterTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bookSearch-form">
      <div className="container">
        <div className="search-form-content flex flex-sb">
          <form action="" className="bookSearch-form" onSubmit={handleSubmit}>
            <div className="myBookSearch-form-elem flex bg-white">
              <div
                className="bookSearch-form-filter"
                onClick={handleFilterMenu}
              >
                <p>
                  {collectionName} ({filterBooks.length})
                </p>
                <img
                  width="200px"
                  src="/images/BookSearch/down.png"
                  alt="no arrow"
                />
                <ul
                  className={toggleFilterMenu ? "openFilter" : ""}
                  type="search"
                  name="collectionFilter"
                  id="collectionFilter"
                >
                  {collectionList.map((el, i) => {
                    return (
                      <CollectionItem
                        key={el.id}
                        name={el.name}
                        size={
                          MyBookList.filter((e) => {
                            if (el.name === "All books")
                              return (
                                e.author.toLowerCase().includes(filterTerm) ||
                                e.title.toLowerCase().includes(filterTerm)
                              );
                            else
                              return (
                                el.name === e.collection &&
                                (e.author.toLowerCase().includes(filterTerm) ||
                                  e.title.toLowerCase().includes(filterTerm))
                              );
                          }).length
                        }
                        setCollection={setCollection}
                      />
                    );
                  })}
                </ul>
              </div>
              <div className="bookSearch-form-container">
                <input
                  type="text"
                  className="bookSearch-form-control"
                  placeholder="Search book ..."
                  value={filterTerm}
                  onChange={handleInputChange} // Update filterTerm as the user types
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookMySearchForm;
