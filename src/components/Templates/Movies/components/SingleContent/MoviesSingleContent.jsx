import { Badge } from "@mui/material";
import { img_300, unavailable } from "../config/config";
import "./MoviesSingleContent.css";
import MoviesContentModal from "../ContentModal/MoviesContentModal";

const MoviesSingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <MoviesContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average.toFixed(1)}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="movies_poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <div className="movies_data_container">
        <div className="movies_title">{title}</div>
        <div className="movies_subTitle">
          <div>{media_type === "tv" ? "TV Series" : "Movie"}</div>
          <div>{date.split("-")[0]}</div>
        </div>
      </div>
    </MoviesContentModal>
  );
};

export default MoviesSingleContent;
