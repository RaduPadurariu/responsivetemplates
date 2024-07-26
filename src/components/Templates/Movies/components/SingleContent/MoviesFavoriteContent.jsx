import { Badge } from "@mui/material";
import { img_300, unavailable } from "../config/config";
import "./MoviesSingleContent.css";

import MoviesFavoriteModal from "../ContentModal/MoviesFavoriteModal";

const MoviesFavoriteContent = ({
  id,
  poster,
  title,
  date,
  vote_average,
  category,
  director,
  actors,
  related,
  related_id,
}) => {
  return (
    <MoviesFavoriteModal
      id={id}
      poster={poster}
      date={date}
      title={title}
      director={director}
      actors={actors}
      related={related}
      related_id={related_id}
    >
      <Badge
        badgeContent={vote_average.toFixed(1)}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="movies_poster"
        src={poster ? `${poster}` : unavailable}
        alt={title}
      />
      <div className="movies_data_container">
        <div className="movies_title">{title}</div>
        <div className="movies_subTitle">
          <div>{"Movie"}</div>
          <div>{date}</div>
        </div>
      </div>
    </MoviesFavoriteModal>
  );
};

export default MoviesFavoriteContent;
