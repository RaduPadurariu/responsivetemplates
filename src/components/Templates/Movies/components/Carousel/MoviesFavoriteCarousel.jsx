import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { noPicture } from "../config/config";
import "./MoviesCarousel.css";
import { movies } from "../MyFavorites/MoviesFavoritesCollection";
const handleDragStart = (e) => e.preventDefault();

const MoviesFavoriteCarousel = ({ id, related, related_id }) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((c) => (
    <div className="movies_carouselItem">
      <img
        src={c.poster ? `${c.poster}` : noPicture}
        alt={"no-img"}
        onDragStart={handleDragStart}
        className="movies_carouselItem__img"
      />
      <span className="movies_carouselItem__txt">{c.title}</span>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    setCredits(movies.filter((el) => el.related === related));
  };

  useEffect(() => {
    if (related) {
      fetchCredits();
    }
    // eslint-disable-next-line
  }, [related]);

  return (
    <AliceCarousel
      mouseTracking
      // infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={related ? items : []}
      // autoPlay
    />
  );
};

export default MoviesFavoriteCarousel;
