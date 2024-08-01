import React, { useEffect, useState } from "react";
// import { makeStyles } from "@mui/system";
import { Modal } from "@mui/material";
import { Fade } from "@mui/material";
import "./MoviesContentModal.css";
import MovieIcon from "@mui/icons-material/Movie";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../config/config.js";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import MoviesFavoriteCarousel from "../Carousel/MoviesFavoriteCarousel.jsx";

const MoviesFavoriteModal = ({
  children,
  title,
  id,
  poster,
  date,
  actors,
  director,
  related,
  related_id,
  category,
}) => {
  const [open, setOpen] = useState(false);
  //   const [content, setContent] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const fetchData = async () => {
  //     const { data } = await axios.get(
  //       `https://api.themoviedb.org/3/${media_type}/${id}?api_key=4cf2e086a755f5725dba725e4b360de8&language=en-US`
  //     );

  //     setContent(data);
  //     // console.log(data);
  //   };

  useEffect(() => {
    // fetchData();
    // eslint-disable-next-line
  }, []);

  const actorNames = actors.map((el) => el.actor);
  const formattedActors = actorNames.join(", ").replace(/, ([^,]*)$/, ". $1");
  return (
    <>
      <div
        className="movies_media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            sx: {
              //Your style here....
              timeout: 500,
            },
          },
        }}
      >
        <Fade in={open}>
          <div
            style={{
              width: "90%",
              height: "80%",
              backgroundColor: "#39445a",
              border: "1px solid #282c34",
              borderRadius: 10,
              color: "white",
              boxShadow:
                "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
              padding: "8px 8px 24px",
            }}
          >
            {" "}
            <div className="movies_contentModal">
              <img
                src={poster ? `${poster}` : unavailable}
                alt={"no-img"}
                className="movies_contentModal__portrait"
              />
              {/* <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="movies_contentModal__landscape"
                /> */}
              <div className="movies_contentModal__about">
                <span className="movies_contentModal__title">
                  {title} ({date})
                </span>

                <div className="movies_contentModal__description">
                  <div className="movies_contentModal_team_container">
                    <div className="movies_contentModal_director">
                      Director:{" "}
                      <span className="movies_contentModal_team_member">
                        <Link to={""}>{director}</Link>
                      </span>{" "}
                    </div>
                    <div className="movies_contentModal_actor">
                      Actors:{" "}
                      <span className="movies_contentModal_team_member">
                        {actors.map((el) => {
                          return (
                            <Link key={el.id} to={""}>
                              {el.id === actors.length
                                ? el.actor
                                : el.actor + ", "}
                            </Link>
                          );
                        })}
                      </span>{" "}
                    </div>
                    <div className="">
                      My Category / Location:{" "}
                      <span className="movies_contentModal_team_member">
                        {category}
                      </span>{" "}
                    </div>
                    <div className="movies_contentModal_movieAbout">
                      Description:{" "}
                      <span className="movies_contentModal_team_member">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sunt accusamus, vel porro cupiditate vitae ex
                        rerum optio quos assumenda perspiciatis ullam quae
                        dolore officiis voluptate.
                      </span>{" "}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="movies_contentModal_related">
                    Realated and How to watch
                  </div>
                  {
                    <MoviesFavoriteCarousel
                      id={id}
                      related={related}
                      related_id={related_id}
                    />
                  }
                </div>

                <Button
                  variant="contained"
                  startIcon={<MovieIcon />}
                  color="secondary"
                >
                  Watch the Movie
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default MoviesFavoriteModal;
