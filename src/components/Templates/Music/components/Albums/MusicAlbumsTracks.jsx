import React from "react";
import "./MusicAlbums.css";
import { Link, useLocation } from "react-router-dom";

const MusicAlbumsTracks = ({ item, children }) => {
  const location = useLocation();

  const getClassName = () => {
    if (location.pathname === "/music/home") {
      return "musicHome_featured_album_player_container";
    } else {
      return "musicHome_featured_album_player_list";
    }
  };
  return (
    <div className="musicHome_album_col musicHome_featured_album_col">
      <div className={getClassName()}>
        <div className="musicHome_featured_album_player">
          <div className="musicHome_featured_title_bar">
            <div className="musicHome_featured_album_title_container">
              <div className="musicHome_featured_album_artist">
                {item.albumName}
              </div>
              <div className="musicHome_featured_album_title">
                {item.albumYear}
              </div>
            </div>
            <div className="musicHome_featured_album_link ml-auto">
              <a href="#">buy it on itunes</a>
            </div>
          </div>

          <div className="musicAlbums_jp_audio">
            <div className="musicAlbums_jp_type_playlist">
              <div className="musicAlbums_jp_playlist">
                <ul>
                  {item.trackList.map((el, i) => {
                    return (
                      <li key={i} className="musicAlbums_jp_playlist_current">
                        <div>
                          <Link
                            to={`/music/albumPage/${item.id.toString()}/${el.id?.toString()}`}
                            className="musicAlbums_jp_playlist_item"
                          >
                            {el.songName}
                          </Link>
                          <div className="musicAlbums_song_duration">
                            {el.songDuration}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicAlbumsTracks;
