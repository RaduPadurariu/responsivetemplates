import React, { useState } from "react";
import "./MusicHome.css";

import MusicHome_shows from "./MusicHome_shows";
import MusicAlbumsTracks from "../Albums/MusicAlbumsTracks";
import MusicHome_Carousel from "./MusicHome_Carousel";
import MusicHome_Artist_content from "./MusicHome_Artist_content";
import { musicAlbums } from "../Albums/MusicAlbumTrackList";
import MusicNews_SinglePlayer from "../News/MusicNews_SinglePlayer";
const MusicHome = () => {
  const [overlayMovedFeatured, setOverlayMovedFeatured] = useState(false);
  const [overlayMovedShows, setOverlayMovedShows] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleIndex = (index) => {
    setTransition(true);
    setIsVisible(false); // Trigger slide-out animation
    setTimeout(() => {
      setActiveIndex(index);
      setIsVisible(true); // Trigger slide-in animation after a short delay
    }, 200);
  };
  const handleMouseEnterFeatured = () => {
    if (!overlayMovedFeatured) {
      setOverlayMovedFeatured(true);
    }
  };

  const handleMouseEnterShows = () => {
    if (!overlayMovedShows) {
      setOverlayMovedShows(true);
    }
  };

  const items = [
    {
      backgroundImage: "url(/images/Music/index.jpg)",
      title: "New single release",
      headerTitle: "Love is all around",
      listenLink: "#",
    },
    {
      backgroundImage: "url(/images/Music/index2.jpg)",
      title: "Popular song",
      headerTitle: "Nine Million Bycicles",
      listenLink: "#",
    },
    {
      backgroundImage: "url(/images/Music/index3.jpg)",
      title: "Last song",
      headerTitle: "Love & Money: Special",
      listenLink: "#",
    },
  ];

  return (
    <>
      <div className="musicHome">
        <div className="musicHome_hero">
          <div className="musicHome_slide_container">
            <MusicHome_Carousel
              {...items[activeIndex]}
              transition={transition}
              isVisible={isVisible}
            />
            <div className="musicHome_carousel_buttons">
              {items.map((item, index) => (
                <button
                  onClick={() => handleIndex(index)}
                  key={index}
                  className={`musicHome_carousel_button ${
                    index === activeIndex ? "musicHome_activeButton" : ""
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="musicHome_featured_album"
          onMouseEnter={handleMouseEnterFeatured}
        >
          <div className="musicHome_background_image_album musicHome_featured_background"></div>
          <div className="musicHome_container">
            <div className="musicHome_subContainer">
              <div className="musicHome_featured_col">
                <div className="musicHome_section_title_container">
                  <div className="musicHome_section_subtitle">Events</div>
                  <div className="musicHome_section_title">
                    <h1>Featured Album</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="musicHome_subContainer musicHome_featured_row">
              <div className="musicHome_album_col">
                <div className="musicHome_featured_album_image">
                  <div
                    className={`musicHome_image_overlay ${
                      overlayMovedFeatured ? "overlay-moved" : ""
                    }`}
                  ></div>
                  <div className="musicHome_background_image_album musicHome_album_featured_background"></div>
                </div>
              </div>

              <MusicAlbumsTracks
                item={musicAlbums[0]}
                position={"absolute"}
                left={"-58px"}
              >
                <MusicNews_SinglePlayer
                  song="/files/Music/Katie-Melua_Nine-Million-Bicycles.mp4"
                  playerBackground="#fff"
                  songTitle="Nine Million Bicycles"
                  playerColor="#000"
                />
              </MusicAlbumsTracks>
            </div>
          </div>
        </div>

        {/* Shows */}
        <div className="musicHome_shows" onMouseEnter={handleMouseEnterShows}>
          <div className="musicHome_container">
            <div className="musicHome_subContainer musicHome_shows_index">
              <div className="musicHome_shows_col">
                <div className="musicHome_section_title_container">
                  <div className="musicHome_section_subtitle">Events</div>
                  <div className="musicHome_section_title">
                    <h1>Upcoming Shows</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="musicHome_subContainer musicHome_shows_row">
              <div className="musicHome_shows_cols musicHome_shows_list_col">
                <div className="musicHome_shows_list_container">
                  <ul className="musicHome_shows_list">
                    <MusicHome_shows />
                  </ul>
                </div>
              </div>

              <div className="musicHome_shows_image_cols">
                <div className="musicHome_shows_image">
                  <div
                    className={`musicHome_image_overlay ${
                      overlayMovedShows ? "overlay-moved" : ""
                    }`}
                  ></div>
                  <img src="/images/Music/shows.jpg" alt="no-shows-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Artist */}
        <div className="musicHome_artist">
          <div className="musicHome_container">
            <div className="musicHome_subContainer">
              <div className="musicHome_artist_image_container">
                <div className="musicHome_artist_image">
                  <img src="/images/Music/artist.png" alt="no-artist-image" />
                </div>
              </div>

              <div className="musicHome_artist_col">
                <MusicHome_Artist_content />
              </div>
            </div>
          </div>
        </div>

        {/* Extra */}
        <div className="musicHome_extra">
          <div className="musicHome_extra_container">
            <div className="musicHome_background_image"></div>
            <div className="musicHome_container">
              <div className="musicHome_subContainer">
                <div className="musicHome_extra_cols">
                  <div className="musicHome_extra_content">
                    <div className="musicHome_extra_title">
                      <h1>Get your tickets now!</h1>
                    </div>
                    <div className="musicHome_extra_text">
                      <p>
                        In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                        Vivamus rutrum dui fermentum eros hendrerit, id lobortis
                        leo volutpat. Maecenas sollicitudin est in libero
                        pretium interdum
                      </p>
                    </div>
                    <div className="musicHome_extra_button">
                      <a href="#">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicHome;
