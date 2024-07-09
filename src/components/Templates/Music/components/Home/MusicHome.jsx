import React from "react";
import "./MusicHome.css";
import MusicHeadTitle from "../../common/HeadTitle/MusicHeadTitle";
import MusicNews_SinglePlayer from "../News/MusicNews_SinglePlayer";
const MusicHome = () => {
  return (
    <>
      <MusicHeadTitle
        subTitle="IN CONSTRUCTION !!!!!!"
        title="Lucy Rider"
        backImg="/images/Music/index.jpg"
      />
      <div className="musicHome">
        <div className="musicHome_feature_album"></div>
        <div className="musicHome_shows"></div>
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
        <div className="musicHome_extra">
          <div className="musicHome_extra_container">
            <div className="musicHome_background_image"></div>
            <div className="musicHome_container">
              <div className="musicHome_subContainer">
                <div className="musicHome_cols">
                  <div className="musicHome_extra_content d-flex flex-column align-items-start justify-content-center">
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
