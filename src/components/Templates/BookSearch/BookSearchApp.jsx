import React from "react";
import BookHome from "./components/Home/BookHome";
import { AppProvider } from "./context.jsx";
import BookNavbar from "./components/Navbar/BookNavbar.jsx";
import { Outlet } from "react-router-dom";

const BookSearchApp = () => {
  return (
    <>
      <AppProvider>
        <BookNavbar />
        <Outlet />
      </AppProvider>
    </>
  );
};

export default BookSearchApp;
