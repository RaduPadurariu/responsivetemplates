import "./App.css";
import { Home } from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
// Financial
import { Financial } from "./components/pages/Templates/Financial/Financial";
// Hotel
import { Hotel } from "./components/pages/Templates/Hotel/Hotel";
import { HotelAboutPage } from "./components/pages/Templates/Hotel/components/pages/HotelAboutPage";
import { HotelHomePage } from "./components/pages/Templates/Hotel/components/pages/HotelHomePage";
import { HotelGalleryPage } from "./components/pages/Templates/Hotel/components/pages/HotelGalleryPage";
import { HotelDestinationsPage } from "./components/pages/Templates/Hotel/components/pages/HotelDestinationsPage";
import { HotelBlogPage } from "./components/pages/Templates/Hotel/components/pages/HotelBlogPage";
import { HotelBlogSinglePage } from "./components/pages/Templates/Hotel/components/Blog/Hotel-blog-single-page/HotelBlogSinglePage";
import { HotelTestimonialPage } from "./components/pages/Templates/Hotel/components/pages/HotelTestimonialPage";
import { HotelContactPage } from "./components/pages/Templates/Hotel/components/pages/HotelContactPage";
import { HotelLoginPage } from "./components/pages/Templates/Hotel/components/pages/HotelLoginPage";
import { HotelRegisterPage } from "./components/pages/Templates/Hotel/components/pages/HotelRegisterPage";
import { HotelSinglePages } from "./components/pages/Templates/Hotel/components/Destinations/SinglePages/HotelSinglePages";
// Book Search
import BookSearch from "./components/pages/Templates/BookSearch/BookSearch";
import BookHomePage from "./components/pages/Templates/BookSearch/components/pages/BookHomePage";
import BookList from "./components/pages/Templates/BookSearch/components/BookList/BookList";
import BookDetails from "./components/pages/Templates/BookSearch/components/BookDetails/BookDetails";
import BookAboutPage from "./components/pages/Templates/BookSearch/components/pages/BookAboutPage";
import BookDisplayPage from "./components/pages/Templates/BookSearch/components/pages/BookDisplayPage";
import BookMyBooksPage from "./components/pages/Templates/BookSearch/components/pages/BookMyBooksPage";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/financial" element={<Financial />}></Route>
          <Route path="/hotel" element={<Hotel />}>
            <Route path="/hotel/home" element={<HotelHomePage />}></Route>
            <Route path="/hotel/about" element={<HotelAboutPage />}></Route>
            <Route path="/hotel/gallery" element={<HotelGalleryPage />}></Route>
            <Route
              path="/hotel/destinations"
              element={<HotelDestinationsPage />}
            ></Route>
            <Route
              path="/hotel/singlePages/:id"
              element={<HotelSinglePages />}
            ></Route>
            <Route path="/hotel/blog" element={<HotelBlogPage />}></Route>
            <Route
              path="/hotel/blogPage/:id"
              element={<HotelBlogSinglePage />}
            ></Route>
            <Route
              path="/hotel/testimonial"
              element={<HotelTestimonialPage />}
            ></Route>
            <Route path="/hotel/contact" element={<HotelContactPage />}></Route>
            <Route path="/hotel/sign-in" element={<HotelLoginPage />}></Route>
            <Route
              path="/hotel/register"
              element={<HotelRegisterPage />}
            ></Route>
            <Route path="*" element={<Navigate to="/hotel/home" />} />
          </Route>
          <Route path="/bookSearch" element={<BookSearch />}>
            <Route path="*" element={<Navigate to="/bookSearch/home" />} />
            <Route path="/bookSearch/home" element={<BookHomePage />}></Route>
            <Route path="/bookSearch/about" element={<BookAboutPage />}></Route>
            <Route
              path="/bookSearch/book"
              element={<BookDisplayPage />}
            ></Route>
            <Route
              path="/bookSearch/book/:id"
              element={<BookDetails />}
            ></Route>
            <Route
              path="/bookSearch/myBook"
              element={<BookMyBooksPage />}
            ></Route>
          </Route>
          <Route path="/cooking" element={<Financial />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
