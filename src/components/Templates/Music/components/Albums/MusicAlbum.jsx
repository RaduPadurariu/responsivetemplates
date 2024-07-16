import React from "react";
import "./MusicAlbums.css";
import { Link } from "react-router-dom";
const MusicAlbum = ({ item }) => {
  return (
    <li className="musicAlbums_album_li">
      <div className="musicAlbums_disc">
        <Link to={`/music/albumPage/${item.id.toString()}`}>
          <div className="musicAlbums_disc_image">
            <img src={item.cover} alt="no-album-img" />
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
};

export default MusicAlbum;
