import React from "react";
import "./MusicAlbums.css";
import { albums } from "./MusicAlbumTrackList";
import MusicNews_SinglePlayer from "../News/MusicNews_SinglePlayer";
const MusicAlbumsTracks = () => {
  return (
    <div className="musicHome_album_col musicHome_featured_album_col">
      <div className="musicHome_featured_album_player_container">
        <div className="musicHome_featured_album_player">
          <div className="musicHome_featured_title_bar">
            <div className="musicHome_featured_album_title_container">
              <div className="musicHome_featured_album_artist">
                {albums[0].albumName}
              </div>
              <div className="musicHome_featured_album_title">
                {albums[0].albumYear}
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
                  {albums[0].trackList.map((el, i) => {
                    return (
                      <li key={i} className="musicAlbums_jp_playlist_current">
                        <div>
                          <a href="#" className="musicAlbums_jp_playlist_item">
                            {el.songName}
                          </a>
                          <div className="musicAlbums_song_duration">
                            {el.songDuration}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <MusicNews_SinglePlayer
                song="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
                playerBackground="#fff"
                songTitle="Song Title"
                playerColor="#000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicAlbumsTracks;
