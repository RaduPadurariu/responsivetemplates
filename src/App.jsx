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
import MusicSingleAlbum from "./components/Templates/Music/components/Albums/SingleAlbum/MusicSingleAlbum";
import MusicAlbumLyrics from "./components/Templates/Music/components/Albums/SingleAlbum/MusicAlbumLyrics";
import GoToTop from "./components/Templates/Hotel/common/GotToTop";

// Movies

import MoviesMyMoviesPage from "./components/Templates/Movies/components/Pages/MoviesMyMoviesPage";
import MoviesApiPage from "./components/Templates/Movies/components/Pages/MoviesApiPage";
import MoviesSearchPage from "./components/Templates/Movies/components/Pages/MoviesSearchPage";
import Movies from "./components/Templates/Movies/Movies";
import MoviesSeriesPage from "./components/Templates/Movies/components/Pages/MoviesSeriesPage";

// Games
import Games from "./components/Templates/Games/Games";
import GamesHomePage from "./components/Templates/Games/components/pages/GamesHomePage";
import GamesCreatorsPage from "./components/Templates/Games/components/Pages/GamesCreatorsPage";
import GamesStoresPage from "./components/Templates/Games/components/Pages/GamesStoresPage";
import GamesAllGamesPage from "./components/Templates/Games/components/Pages/GamesAllGamesPage";
import GamesMyGamesPage from "./components/Templates/Games/components/Pages/GamesMyGamesPage";

function App() {
  return (
    <>
      <div className="app">
        <GoToTop />
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
          <Route path="/music" element={<Music />}>
            <Route path="home" element={<MusicHomePage />}></Route>
            <Route path="albums" element={<MusicAlbumsPage />}></Route>
            <Route path="albumPage/:id" element={<MusicSingleAlbum />}></Route>
            <Route
              path="albumPage/:albumId/:songId"
              element={<MusicAlbumLyrics />}
            ></Route>
            <Route path="news" element={<MusicNewsPage />}></Route>
            <Route path="contact" element={<MusicContactPage />}></Route>
            <Route path="/music/*" element={<Navigate to="/music/home" />} />
          </Route>

          {/* Movies */}
          <Route path="/movies" element={<Movies />}>
            <Route path="home" element={<MoviesApiPage />}></Route>
            <Route path="series" element={<MoviesSeriesPage />}></Route>
            <Route path="search" element={<MoviesSearchPage />}></Route>
            <Route path="favorites" element={<MoviesMyMoviesPage />}></Route>

            <Route path="/movies/*" element={<Navigate to="/movies/home" />} />
          </Route>
          <Route path="/games" element={<Games />}>
            <Route path="home" element={<GamesHomePage />}></Route>
            <Route path="creators" element={<GamesCreatorsPage />}></Route>
            <Route path="stores" element={<GamesStoresPage />}></Route>
            <Route path="allGames" element={<GamesAllGamesPage />}></Route>
            <Route path="myGames" element={<GamesMyGamesPage />}></Route>

            <Route path="/games/*" element={<Navigate to="/movies/home" />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
