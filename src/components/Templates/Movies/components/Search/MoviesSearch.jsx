import {
  Button,
  createTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@mui/material";
import "./MoviesSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import MoviesCustomPagination from "../CustomPagination/MoviesCustomPagination";
import MoviesSingleContent from "../SingleContent/MoviesSingleContent";

const MovieSearch = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          type ? "tv" : "movie"
        }?api_key=4cf2e086a755f5725dba725e4b360de8&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchSearch();
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div className="movies_container">
      <ThemeProvider theme={darkTheme}>
        <div className="movies_search">
          <TextField
            style={{
              flex: 1,
              color: "white",
              background: "#4a5568",
              borderRadius: "5px",
            }}
            className="movies_searchBox"
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
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5, color: "white" }}
          aria-label="disabled tabs example"
        >
          <Tab
            style={{ width: "50%", color: "white", fontWeight: "bold" }}
            label="Search Movies"
          />
          <Tab
            style={{ width: "50%", color: "white", fontWeight: "bold" }}
            label="Search TV Series"
          />
        </Tabs>
      </ThemeProvider>
      <div className="movies_subContainer">
        {content &&
          content.map((c) => (
            <MoviesSingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <MoviesCustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default MovieSearch;
