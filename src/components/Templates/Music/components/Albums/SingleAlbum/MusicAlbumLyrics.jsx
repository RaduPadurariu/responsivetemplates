import React, { useEffect, useState } from "react";
import "./MusicSingle.css";
import { Link, useParams } from "react-router-dom";

import { musicAlbums } from "../MusicAlbumTrackList";
import MusicHeadTitle from "../../../common/HeadTitle/MusicHeadTitle";
import MusicSingleAlbumEmpty from "./MusicSingleAlbumEmpty";
const MusicAlbumLyrics = () => {
  const { albumId, songId } = useParams();
  const [album, setAlbum] = useState(null);
  const [song, setSong] = useState(null);

  useEffect(() => {
    const foundAlbum = musicAlbums.find(
      (item) => item.id === parseInt(albumId)
    );
    if (foundAlbum) {
      setAlbum(foundAlbum);
    }

    if (foundAlbum) {
      const foundSong = foundAlbum.trackList.find(
        (item) => item.id === parseInt(songId)
      );
      if (foundSong) {
        setSong(foundSong);
      }
    }
  }, [albumId, songId]);
  return (
    <>
      {album && song ? (
        <div className="musicAlbums_lyrics">
          <MusicHeadTitle
            subTitle="Katie Melua"
            title={song.songName}
            backImg={album.cover}
          />
          <div className="musicHome_container">
            <div className="musicAlbums_lyrics_btn_container">
              <Link
                to={`/music/albumPage/${album.id.toString()}`}
                className="musicAlbums_lyrics_btn"
              >
                <i className="fas fa-long-arrow-alt-left"></i> Go back
              </Link>
            </div>

            <div className="musicHome_subContainer musicAlbums_lyrics_container">
              <div className="musicAlbums_col_lyrics">
                <p>{song.songLyrics}</p>
              </div>
              <div className="musicAlbums_col_albumPicture">
                <img src={album.cover} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MusicSingleAlbumEmpty />
      )}
    </>
  );
};

export default MusicAlbumLyrics;
