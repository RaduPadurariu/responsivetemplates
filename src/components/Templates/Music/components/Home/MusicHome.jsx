import React, { useState } from "react";
import "./MusicHome.css";
import MusicHeadTitle from "../../common/HeadTitle/MusicHeadTitle";
import MusicNews_SinglePlayer from "../News/MusicNews_SinglePlayer";
import MusicHome_shows from "./MusicHome_shows";
const MusicHome = () => {
  const [overlayMoved, setOverlayMoved] = useState(false);

  const handleMouseEnter = () => {
    console.log("test");
    if (!overlayMoved) {
      setOverlayMoved(true);
    }
  };
  return (
    <>
      <MusicHeadTitle
        subTitle="IN CONSTRUCTION !!!!!!"
        title="Lucy Rider"
        backImg="/images/Music/index.jpg"
      />
      <div className="musicHome">
        <div className="musicHome_feature_album"></div>

        {/* Shows */}
        <div className="musicHome_shows">
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
                    onMouseEnter={handleMouseEnter}
                    className={`musicHome_image_overlay ${
                      overlayMoved ? "overlay-moved" : ""
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
                <div className="musicHome_artist_content">
                  <div className="musicHome_section_title_container">
                    <div className="musicHome_section_subtitle">Events</div>
                    <div className="musicHome_section_title">
                      <h1>The Artist</h1>
                    </div>
                  </div>
                  <div className="musicHome_artist_text">
                    <p>
                      {" "}
                      In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                      Vivamus rutrum dui fermentum eros hendrerit, id lobortis
                      leo volutpat. Maecenas sollicitudin est in libero pretium
                      interdum. Nullam volutpat dui sem, ac congue purus luctus
                      nec. Curabitur luctus luctus erat, sit amet facilisis quam
                      congue quis. Quisque ornare luctus erat id dignissim.
                      Nullam ac nunc quis ex porttitor luctus.
                    </p>
                    <p>
                      Integer sed facilisis eros. In iaculis rhoncus velit in
                      malesuada. In hac habitasse platea dictumst. Fusce erat
                      ex, consectetur sit amet ornare suscipit, porta et erat.
                      Donec nec nisi in nibh commodo laoreet. Mauris dapibus
                      justo ut feugiat malesuada. Fusce ultricies ante tortor,
                      non vestibulum est feugiat ut.
                    </p>
                  </div>
                  <div className="musicHome_artist_sig">
                    <img src="/images/Music/sig.png" alt="no-sig" />
                  </div>
                  <MusicNews_SinglePlayer
                    song="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
                    playerBackground="#2b2b2b"
                    songTitle="Song Title"
                  />
                </div>
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
