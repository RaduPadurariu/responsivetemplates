import React from "react";
import "./MusicAlbums.css";
import { albums } from "./MusicAlbumTrackList";
import { Link } from "react-router-dom";
const MusicAlbum = () => {
  return albums.slice(1).map((el, i) => {
    return (
      <li key={i} className="musicAlbums_album_li">
        <div className="musicAlbums_disc">
          <Link to="album">
            <div className="musicAlbums_disc_image">
              <img src={el.cover} alt="no-album-img" />
            </div>
            <div className="musicAlbums_disc_container">
              <div>
                {/* <div className="musicAlbums_disc_content">
                  <div>
                    <div className="musicAlbums_disc_title">{el.albumYear}</div>
                    <div className="musicAlbums_disc_subtitle">
                      {el.albumYear}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </Link>
        </div>
      </li>
    );
  });
};

export default MusicAlbum;
