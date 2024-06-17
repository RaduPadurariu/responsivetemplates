import "./App.css";
import { Home } from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
// Financial
import { Financial } from "./components/Templates/Financial/Financial";
// Hotel
import { Hotel } from "./components/Templates/Hotel/Hotel";
import { HotelAboutPage } from "./components/Templates/Hotel/components/pages/HotelAboutPage";
import { HotelHomePage } from "./components/Templates/Hotel/components/pages/HotelHomePage";
import { HotelGalleryPage } from "./components/Templates/Hotel/components/pages/HotelGalleryPage";
import { HotelDestinationsPage } from "./components/Templates/Hotel/components/pages/HotelDestinationsPage";
import { HotelBlogPage } from "./components/Templates/Hotel/components/pages/HotelBlogPage";
import { HotelBlogSinglePage } from "./components/Templates/Hotel/components/Blog/Hotel-blog-single-page/HotelBlogSinglePage";
import { HotelTestimonialPage } from "./components/Templates/Hotel/components/pages/HotelTestimonialPage";
import { HotelContactPage } from "./components/Templates/Hotel/components/pages/HotelContactPage";
import { HotelLoginPage } from "./components/Templates/Hotel/components/pages/HotelLoginPage";
import { HotelRegisterPage } from "./components/Templates/Hotel/components/pages/HotelRegisterPage";
import { HotelSinglePages } from "./components/Templates/Hotel/components/Destinations/SinglePages/HotelSinglePages";
// Book Search
import BookSearch from "./components/Templates/BookSearch/BookSearch";
import BookHomePage from "./components/Templates/BookSearch/components/pages/BookHomePage";
import BookDetails from "./components/Templates/BookSearch/components/BookDetails/BookDetails";
import BookAboutPage from "./components/Templates/BookSearch/components/pages/BookAboutPage";
import BookDisplayPage from "./components/Templates/BookSearch/components/pages/BookDisplayPage";
import BookMyBooksPage from "./components/Templates/BookSearch/components/pages/BookMyBooksPage";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route path="/" element={<Home />}></Route>

          {/*  Financial */}
          <Route path="/financial" element={<Financial />}></Route>

          {/*  Hotel */}
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
            <Route path="/hotel/*" element={<Navigate to="/hotel/home" />} />
          </Route>

          {/* Book */}
          <Route path="/bookSearch" element={<BookSearch />}>
            <Route
              path="/bookSearch/*"
              element={<Navigate to="/bookSearch/home" />}
            />
            <Route path="/bookSearch/home" element={<BookHomePage />}>
              <Route
                path="/bookSearch/home/book"
                element={<BookDisplayPage />}
              ></Route>
              <Route
                path="/bookSearch/home/book/:id"
                element={<BookDetails />}
              ></Route>
              <Route
                path="/bookSearch/home/about"
                element={<BookAboutPage />}
              ></Route>
            </Route>

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
