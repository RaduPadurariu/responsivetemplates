import React from "react";
import "./MusicHome.css";
import MusicNews_SinglePlayer from "../News/MusicNews_SinglePlayer";
const MusicHome_Artist_content = () => {
  return (
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
          In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum
          dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas
          sollicitudin est in libero pretium interdum. Nullam volutpat dui sem,
          ac congue purus luctus nec. Curabitur luctus luctus erat, sit amet
          facilisis quam congue quis. Quisque ornare luctus erat id dignissim.
          Nullam ac nunc quis ex porttitor luctus.
        </p>
        <p>
          Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In
          hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet
          ornare suscipit, porta et erat. Donec nec nisi in nibh commodo
          laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies
          ante tortor, non vestibulum est feugiat ut.
        </p>
      </div>
      <div className="musicHome_artist_sig">
        <img src="/images/Music/sig.png" alt="no-sig" />
      </div>
      <MusicNews_SinglePlayer
        song="/files/Music/Katie-Melua_Nine-Million-Bicycles.mp4"
        playerBackground="#fff"
        playerColor="#000"
        songTitle="Nine Million Bicycles"
      />
    </div>
  );
};

export default MusicHome_Artist_content;
