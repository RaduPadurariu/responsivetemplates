import React, { useEffect, useState } from "react";
import "../../Movies.css";
import MoviesGenres from "../Genres/MoviesGenres";
import MoviesSingleContent from "../SingleContent/MoviesSingleContent";
import axios from "axios";
import MoviesCustomPagination from "../CustomPagination/MoviesCustomPagination";

export const useGenre = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const GenreIds = selectedGenres.map((g) => g.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

const MoviesSeries = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const genreForURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=4cf2e086a755f5725dba725e4b360de8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreForURL, page]);

  return (
    <div className="movies_container">
      <span className="movies_page_title">Discover TV Series</span>
      <MoviesGenres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="movies_subContainer">
        {content &&
          content.map((c) => (
            <MoviesSingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>

      {numOfPages > 1 && (
        <MoviesCustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default MoviesSeries;
