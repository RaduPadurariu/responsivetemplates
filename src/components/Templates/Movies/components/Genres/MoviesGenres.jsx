import React from "react";
import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import "./MoviesGenres.css";
const MoviesGenres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=4cf2e086a755f5725dba725e4b360de8&language=en-US`
      );
      setGenres(data.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]); // unmounting
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div
      style={{
        padding: "10px 0 20px 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2, fontWeight: "bold" }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{
            margin: 2,
            color: "#000",
            background: "#ddd",
            fontWeight: "bold",
          }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default MoviesGenres;
