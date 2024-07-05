import React, { useState, useRef, useEffect } from "react";
import "./MusicNews.css";
import ReactHowler from "react-howler";

const MusicNews_SinglePlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        if (playerRef.current) {
          setCurrentTime(playerRef.current.seek());
        }
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleMuteToggle = () => {
    setMuted(!muted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleSeekChange = (e) => {
    const seekTime = parseFloat(e.target.value);
    if (playerRef.current) {
      playerRef.current.seek(seekTime);
      setCurrentTime(seekTime);
    }
  };

  const handleLoad = () => {
    if (playerRef.current) {
      setDuration(playerRef.current.duration());
    }
  };

  const handleProgressColor = () => {};
  return (
    <div className="musicNews_single_player_container">
      <ReactHowler
        src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
        playing={playing}
        mute={muted}
        volume={volume}
        ref={playerRef}
        onLoad={handleLoad}
      />
      <div className="musicNews_single_player">
        {/* <div id="musicNews_jplayer_1" className="musicNews_jp-jplayer"></div> */}
        <div
          id="musicNews_jp_container_1"
          className="musicNews_jp-audio"
          role="application"
          aria-label="media player"
        >
          <div className="musicNews_jp-type-single">
            <div className="musicNews_player_details d-flex flex-row align-items-center justify-content-start">
              <div className="musicNews_jp-details">
                <div>playing</div>
                <div className="musicNews_jp-title" aria-label="title">
                  &nbsp;
                </div>
              </div>
              <div className="musicNews_jp-controls-holder ml-auto">
                <button className="musicNews_jp-play"></button>
              </div>
            </div>

            {/* Player Control */}
            <div className="musicNews_player_controls">
              <div className="musicNews_jp-gui jp-interface">
                <div className="musicNews_jp-controls-holder musicNews_time_controls">
                  <div>
                    <div
                      className="musicNews_jp-current-time"
                      role="timer"
                      aria-label="time"
                    >
                      {currentTime.toFixed(2)}
                    </div>
                  </div>
                  <div className="musicNews_jp-player_controls">
                    <div className="musicNews_jp-seek-bar">
                      <input
                        className="musicNews_jp-player-bar-value"
                        type="range"
                        min={0}
                        max={duration}
                        step="0.01"
                        value={currentTime}
                        onChange={handleSeekChange}
                        style={{
                          background: `linear-gradient(90deg, #5f5f5f ${
                            (currentTime / duration) * 100
                          }%, #989898 ${(currentTime / duration) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className="musicNews_jp-duration"
                      role="timer"
                      aria-label="duration"
                    >
                      {duration.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Volume */}
                <div className="musicNews_jp-volume-controls">
                  <button
                    className="musicNews_jp-mute"
                    onClick={handleMuteToggle}
                  >
                    <img
                      src={
                        muted
                          ? "/images/Music/mute_0.png"
                          : "/images/Music/mute_1.png"
                      }
                      alt="mute-img"
                    />
                  </button>
                  <div className="musicNews_jp-volume-bar">
                    {/* <div className="musicNews_jp-volume-bar-value"></div> */}
                    <input
                      className="musicNews_jp-volume-bar-value"
                      type="range"
                      min={0}
                      max={100}
                      step="1"
                      value={volume}
                      onChange={handleVolumeChange}
                      style={{
                        background: `linear-gradient(90deg, #5f5f5f ${volume}%, #989898 ${volume}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* No solution */}
            <div className="musicNews_jp-no-solution">
              <span>Update Required</span>
              To play the media you will need to either update your browser to a
              recent version or update your{" "}
              <a href="http://get.adobe.com/flashplayer/" target="_blank">
                Flash plugin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicNews_SinglePlayer;
