import React, { useEffect, useState } from "react";
import "./MusicSingle.css";
import { musicAlbums } from "../MusicAlbumTrackList";
import MusicHeadTitle from "../../../common/HeadTitle/MusicHeadTitle";
import { useParams } from "react-router-dom";
import MusicSingleAlbumEmpty from "./MusicSingleAlbumEmpty";
import MusicAlbumsTracks from "../MusicAlbumsTracks";
const MusicSingleAlbum = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = musicAlbums.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <div>
          <MusicHeadTitle
            subTitle="Katie Melua"
            title={item.albumName}
            backImg={"/images/Music/single.jpg"}
          />
          <div className="musicSingleAlbum">
            <div className="musicHome_container">
              <div className="musicHome_subContainer musicSingleAlbum_cols">
                <div className="musicSingleAlbum_col_image">
                  <div className="musicSingleAlbum_info">
                    <div className="musicSingleAlbum_single_image">
                      <img src={item.cover} alt="no-single-img" />
                    </div>
                    <div className="musicSingleAlbum_single_info_list">
                      <ul>
                        <li>
                          <span>Release date:</span> {item.releaseDate}
                        </li>
                        <li>
                          <span>Genres:</span> {item.genres}
                        </li>
                        <li>
                          <span>Producers:</span> {item.producers}
                        </li>
                        <li>
                          <span>Number of songs:</span> {item.trackList.length}
                        </li>

                        <li>
                          <span>Description:</span> In vitae nisi aliquam,
                          scelerisque leo a, volutpat sem. Vivamus rutrum dui
                          fermentum eros hendrerit, id lobortis leo volutpat.
                          Maecenas sollicitudin est in libero pretium interdum.
                          Nullam volutpat dui sem, ac congue purus luctus nec.
                          Curabitur luctus luctus erat, sit amet facilisis quam
                          congue quis. Quisque ornare luctus erat id dignissim.
                          Nullam ac nunc quis ex porttitor luctus. In vitae nisi
                          aliquam, scelerisque leo a, volutpat sem. Vivamus
                          rutrum dui fermentum eros hendrerit, id lobortis leo
                          volutpat.
                        </li>
                      </ul>
                    </div>

                    <div className="musicSingleAlbum_single_logoList">
                      <div>
                        <a href="#">
                          <img src="/images/Music/logo_1.png" alt="" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <img src="/images/Music/logo_2.png" alt="" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <img src="/images/Music/logo_3.png" alt="" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <img src="/images/Music/logo_4.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="musicSingleAlbum_col_description">
                  <div className="musicSingleAlbum_single_content">
                    <div className="musicSingleAlbum_single_text">
                      <p>
                        {" "}
                        In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                        Vivamus rutrum dui fermentum eros hendrerit, id lobortis
                        leo volutpat. Maecenas sollicitudin est in libero
                        pretium interdum. Nullam volutpat dui sem, ac congue
                        purus luctus nec. Curabitur luctus luctus erat, sit amet
                        facilisis quam congue quis. Quisque ornare luctus erat
                        id dignissim. Nullam ac nunc quis ex porttitor luctus.
                      </p>
                      <p>
                        Integer sed facilisis eros. In iaculis rhoncus velit in
                        malesuada. In hac habitasse platea dictumst. Fusce erat
                        ex, consectetur sit amet ornare suscipit, porta et erat.
                        Donec nec nisi in nibh commodo laoreet. Mauris dapibus
                        justo ut feugiat malesuada. Fusce ultricies ante tortor,
                        non vestibulum est feugiat ut.
                      </p>
                      {/* <p>
                        Nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                        rutrum dui fermentum eros hendrerit, id lobortis leo
                        volutpat. Maecenas sollicitudin est in libero pretium
                        interdum. Nullam volutpat dui sem, ac congue purus
                        luctus nec. Curabitur luctus luctus erat, sit amet
                        facilisis quam congue quis. Quisque ornare luctus erat
                        id dignissim. Nullam ac nunc quis ex porttitor luctus.
                      </p> */}
                    </div>
                    <MusicAlbumsTracks item={item} />
                  </div>
                </div>
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

export default MusicSingleAlbum;
