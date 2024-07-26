import React, { useEffect, useState } from "react";
import "./MoviesMyFavorites.css";
import {
  createTheme,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";
import MoviesCustomPagination from "../CustomPagination/MoviesCustomPagination";
import SearchIcon from "@mui/icons-material/Search";

import { movies } from "./MoviesFavoritesCollection";
import MoviesFavoriteContent from "../SingleContent/MoviesFavoriteContent";

const MoviesMyFavorites = () => {
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    // Add sorting functionality here
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
    // Add filter functionality here
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchSearch();
    }
  };

  const fetchFavorites = () => {
    // const startIndex = (page - 1) * 20;
    // const endIndex = startIndex + 20;
    // setContent(movies.slice(startIndex, endIndex));
    setContent(movies);
    setNumOfPages(Math.ceil(movies.length / 20));
  };

  const fetchSearch = () => {
    setContent(data.results);
    setNumOfPages(Math.ceil(movies.length / 20));
  };

  useEffect(() => {
    fetchFavorites();
  }, [page, movies]);

  // useEffect(() => {
  //   window.scroll(0, 0);
  //   fetchSearch();
  //   // eslint-disable-next-line
  // }, [type, page]);

  return (
    <div className="movies_container">
      <span className="movies_page_title">Personal Favorites</span>
      <div
        className="movies_filter_data_container"
        // style={{
        //   padding: "20px",
        //   backgroundColor: "#2d3748",
        //   borderRadius: "10px",
        // }}
      >
        <ThemeProvider theme={darkTheme}>
          <div
            className="movies_search"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <TextField
              style={{
                color: "white",
                background: "#4a5568",
                borderRadius: "5px",
                flex: 1,
              }}
              className="movies_favorite_searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
              InputProps={{
                style: { color: "white" }, // Text color
              }}
              InputLabelProps={{
                style: { color: "white" }, // Label color
              }}
            />
            {/* <Button
              onClick={fetchSearch}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchIcon fontSize="large" />
            </Button> */}
            <div
              className="movies_search_filter_container"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <FormControl
                style={{
                  color: "white",
                  background: "#4a5568",
                  borderRadius: "5px",
                }}
                className="movies_favorite_filter"
                variant="standard"
                sx={{ minWidth: 120 }}
              >
                <InputLabel
                  id="demo-simple-select-standard-label"
                  style={{
                    color: "white",
                    textAlign: "left",
                    width: "100%",
                    paddingLeft: "4px",
                  }}
                >
                  NAS Location
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  // value={age}
                  // onChange={handleChange}
                  label="Age"
                  style={{ color: "white" }}
                  className="movies_selector"
                  MenuProps={{
                    PaperProps: {
                      style: {
                        backgroundColor: "#4a5568",
                        color: "white",
                      },
                    },
                  }}
                  value={filterOption}
                  onChange={handleFilterChange}
                >
                  <MenuItem value="allMovies">
                    <em>All Movies</em>
                  </MenuItem>
                  <MenuItem value={"action-crime"}>Action-crime</MenuItem>
                  <MenuItem value={"drama"}>Drama</MenuItem>
                  <MenuItem value={"western"}>Western</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                style={{
                  color: "white",
                  background: "#4a5568",
                  borderRadius: "5px",
                }}
                className="movies_favorite_filter"
                variant="standard"
                sx={{ minWidth: 120 }}
              >
                <InputLabel
                  id="demo-simple-select-standard-label"
                  style={{
                    color: "white",
                    textAlign: "left",
                    width: "100%",
                    paddingLeft: "4px",
                  }}
                >
                  Sort
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  // value={age}
                  // onChange={handleChange}
                  label="sort"
                  style={{ color: "white" }}
                  className="movies_selector"
                  value={sortOption}
                  onChange={handleSortChange}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        backgroundColor: "#4a5568",
                        color: "white",
                      },
                    },
                  }}
                >
                  <MenuItem value="ratingAsc">
                    <em>Rating Asc</em>
                  </MenuItem>
                  <MenuItem value="ratingDesc">Rating Desc</MenuItem>
                  <MenuItem value="yearAsc">Year Asc</MenuItem>
                  <MenuItem value="yearDesc">Year Desc</MenuItem>
                  <MenuItem value="nameAsc">Name Asc</MenuItem>
                  <MenuItem value="nameDesc">Name Desc</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </ThemeProvider>
      </div>
      <div className="movies_subContainer">
        {content &&
          content.map((c) => (
            <MoviesFavoriteContent
              key={c.id}
              id={c.id}
              poster={c.poster}
              title={c.title}
              date={c.year}
              vote_average={c.rating}
              category={c.category}
              related={c.related}
              related_id={c.related_id}
              director={c.director}
              actors={c.actors}
            />
          ))}
        {searchText && !content && <h2>No Movies Found</h2>}
      </div>
      {/* {numOfPages > 1 && (
        <MoviesCustomPagination setPage={setPage} numOfPages={numOfPages} />
      )} */}
    </div>
  );
};

export default MoviesMyFavorites;
