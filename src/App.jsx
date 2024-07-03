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

// Music
import MusicAlbumsPage from "./components/Templates/Music/components/Pages/MusicAlbumsPage";
import MusicHomePage from "./components/Templates/Music/components/Pages/MusicHomePage";
import MusicNewsPage from "./components/Templates/Music/components/Pages/MusicNewsPage";
import MusicContactPage from "./components/Templates/Music/components/Pages/MusicContactPage";
import Music from "./components/Templates/Music/Music";
import MusicApp from "./components/Templates/Music/MusicApp";

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
            <Route path="home" element={<HotelHomePage />}></Route>
            <Route path="about" element={<HotelAboutPage />}></Route>
            <Route path="gallery" element={<HotelGalleryPage />}></Route>
            <Route
              path="destinations"
              element={<HotelDestinationsPage />}
            ></Route>
            <Route
              path="singlePages/:id"
              element={<HotelSinglePages />}
            ></Route>
            <Route path="blog" element={<HotelBlogPage />}></Route>
            <Route
              path="blogPage/:id"
              element={<HotelBlogSinglePage />}
            ></Route>
            <Route
              path="testimonial"
              element={<HotelTestimonialPage />}
            ></Route>
            <Route path="contact" element={<HotelContactPage />}></Route>
            <Route path="sign-in" element={<HotelLoginPage />}></Route>
            <Route path="register" element={<HotelRegisterPage />}></Route>
            <Route path="/hotel/*" element={<Navigate to="/hotel/home" />} />
          </Route>

          {/* Book */}
          <Route path="/bookSearch" element={<BookSearch />}>
            <Route path="home" element={<BookHomePage />}>
              <Route path="book" element={<BookDisplayPage />}></Route>
              <Route path="book/:id" element={<BookDetails />}></Route>
              <Route path="about" element={<BookAboutPage />}></Route>
            </Route>
            <Route path="myBook" element={<BookMyBooksPage />}></Route>
            <Route
              path="/bookSearch/*"
              element={<Navigate to="/bookSearch/home" />}
            />
          </Route>

          {/* Music */}
          <Route path="/music" element={<MusicApp />}>
            <Route path="home" element={<MusicHomePage />}></Route>
            <Route path="albums" element={<MusicAlbumsPage />}></Route>
            <Route path="news" element={<MusicNewsPage />}></Route>
            <Route path="contact" element={<MusicContactPage />}></Route>
            <Route path="/music/*" element={<Navigate to="/music/home" />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
