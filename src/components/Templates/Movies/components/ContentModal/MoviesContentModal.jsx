import React, { useEffect, useState } from "react";
// import { makeStyles } from "@mui/system";
import { Modal } from "@mui/material";
import { Fade } from "@mui/material";
import axios from "axios";
import "./MoviesContentModal.css";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../config/config.js";
import "./MoviesContentModal.css";
import { Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MoviesCarousel from "../Carousel/MoviesCarousel";

const MoviesContentModal = ({ children, media_type, id }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [video, setVideo] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=4cf2e086a755f5725dba725e4b360de8&language=en-US`
    );

    setContent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=4cf2e086a755f5725dba725e4b360de8&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);
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
            {content && (
              <div className="movies_contentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="movies_contentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="movies_contentModal__landscape"
                />
                <div className="movies_contentModal__about">
                  <span className="movies_contentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="movies_tagline">{content.tagline}</i>
                  )}

                  <span className="movies_contentModal__description">
                    {content.overview}
                  </span>

                  <div>
                    {<MoviesCarousel id={id} media_type={media_type} />}
                  </div>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default MoviesContentModal;
