import React, { useEffect, useState } from "react";
import "./MoviesMyFavorites.css";
import {
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";

import { movies } from "./MoviesFavoritesCollection";
import MoviesFavoriteContent from "../SingleContent/MoviesFavoriteContent";

const locationItems = [
  { id: 0, name: "All movies" },
  { id: 1, name: "Action-Crime" },
  { id: 2, name: "Drama" },
  { id: 3, name: "Western" },
  { id: 4, name: "Mafia" },
  { id: 5, name: "War" },
];

const sortItems = [
  {
    id: 0,
    name: "ID",
    sortFunction: (a, b) => (a.id ?? 0) - (b.id ?? 0),
    value: "ID",
  },
  {
    id: 1,
    name: "Rating Desc",
    sortFunction: (a, b) => (b.rating ?? 0) - (a.rating ?? 0),
    value: "ratingDesc",
  },
  {
    id: 2,
    name: "Rating Asc",
    sortFunction: (a, b) => (a.rating ?? 0) - (b.rating ?? 0),
    value: "ratingAsc",
  },
  {
    id: 3,
    name: "Year Desc",
    sortFunction: (a, b) => (b.year ?? 0) - (a.year ?? 0),
    value: "yearDesc",
  },
  {
    id: 4,
    name: "Year Asc",
    sortFunction: (a, b) => (a.year ?? 0) - (b.year ?? 0),
    value: "yearAsc",
  },
  {
    id: 5,
    name: "Name Desc",
    sortFunction: (a, b) => (b.title ?? "").localeCompare(a.title ?? ""),
    value: "nameDesc",
  },
  {
    id: 6,
    name: "Name Asc",
    sortFunction: (a, b) => (a.title ?? "").localeCompare(b.title ?? ""),
    value: "nameAsc",
  },
];

const MoviesMyFavorites = () => {
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState(movies);

  const [sortOption, setSortOption] = useState(sortItems[0].value);

  const [filterOption, setFilterOption] = useState("All movies");

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const handleSortChange = (event) => {
    const selectedSort = sortItems.find(
      (item) => item.value === event.target.value
    );
    if (selectedSort) {
      setSortOption(selectedSort.value);
    }
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const fetchFavorites = () => {
    // const startIndex = (page - 1) * 20;
    // const endIndex = startIndex + 20;
    // setContent(movies.slice(startIndex, endIndex));
    setContent(movies);
    setNumOfPages(Math.ceil(movies.length / 20));
  };

  useEffect(() => {
    fetchFavorites();
  }, [page]);

  useEffect(() => {
    setContent(() => {
      const filteredMovies = movies
        .filter((el) => {
          const matchesCategory =
            filterOption === "All movies" || el.category === filterOption;
          const matchesSearch = el.title
            .toLowerCase()
            .includes(searchText.toLowerCase());
          return matchesCategory && matchesSearch;
        })
        .sort(sortItems.find((el) => el.value == sortOption).sortFunction);

      return filteredMovies;
    });
  }, [filterOption, searchText, sortOption, content, movies]);

  // useEffect(() => {
  //   window.scroll(0, 0);
  //   fetchSearch();
  //   // eslint-disable-next-line
  // }, [type, page]);

  return (
    <div className="movies_container">
      <span className="movies_page_title">Personal Favorites</span>
      <div className="movies_filter_data_container">
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
              InputProps={{
                style: { color: "white" }, // Text color
              }}
              InputLabelProps={{
                style: { color: "white" }, // Label color
              }}
              value={searchText}
            />
            <div
              className="movies_search_filter_container"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              {/* Filter */}
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
                  labelId="filter-label"
                  id="filter-select"
                  label="Filter"
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
                  {locationItems.map((el, i) => {
                    return (
                      <MenuItem value={el.name} key={el.id} name={el.name}>
                        {el.name} (
                        {
                          movies.filter((e) => {
                            if (el.name === "All movies")
                              return e.title.toLowerCase().includes(searchText);
                            else
                              return (
                                el.name === e.category &&
                                e.title.toLowerCase().includes(searchText)
                              );
                          }).length
                        }
                        )
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              {/* Sort */}
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
                  labelId="sort-label"
                  id="sort-select"
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
                  {sortItems.map((el, i) => {
                    return (
                      <MenuItem key={el.id} value={el.value} name={el.name}>
                        {" "}
                        {el.name}
                      </MenuItem>
                    );
                  })}
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
        {searchText && content.length === 0 && <h2>No Movies Found</h2>}
      </div>
      {/* {numOfPages > 1 && (
        <MoviesCustomPagination setPage={setPage} numOfPages={numOfPages} />
      )} */}
    </div>
  );
};

export default MoviesMyFavorites;
