import React, { useState, useRef, useEffect } from "react";
import "./MusicNews.css";
import ReactHowler from "react-howler";

const MusicNews_SinglePlayer = ({ song, playerBackground, songTitle }) => {
  const playerBackgroundStyle = { "--playerBackground": `${playerBackground}` };
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const [playError, setPlayError] = useState(false);

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
    setPlaying(!playing);
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
    const sound = playerRef.current?.howler;
    if (sound) {
      const loadedDuration = sound.duration();
      if (!isNaN(loadedDuration) && loadedDuration !== Infinity) {
        setDuration(loadedDuration);
      }
    }
  };

  const handleLoadError = (error) => {
    console.log("aici avem eroare", error);
    setLoadError(true);
  };

  const handlePlayError = (error) => {
    console.log("aici avem eroare", error);
    setPlayError(true);
  };

  const formatTime = (time) => {
    const format = (time) => {
      if (time >= 10) return time;
      else return "0" + time;
    };
    const minutes = format(Math.floor(time / 60));
    const seconds = format(Math.floor(time % 60));
    return (
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    );
  };

  return (
    <div className="musicNews_single_player_container">
      <ReactHowler
        src={song}
        playing={playing}
        mute={muted}
        volume={volume}
        duration={duration}
        ref={playerRef}
        onLoad={handleLoad}
        onLoadError={handleLoadError}
        onPlayError={handlePlayError}
      />
      <div className="musicNews_single_player">
        <div
          id="musicNews_jp_container_1"
          className="musicNews_jp-audio"
          role="application"
          aria-label="media player"
        >
          <div className="musicNews_jp-type-single">
            <div
              className="musicNews_player_details"
              style={playerBackgroundStyle}
            >
              <div className="musicNews_jp-title" aria-label="title">
                {songTitle}
              </div>

              <div className="musicNews_jp-controls-holder">
                <button
                  className={`musicNews_jp-player ${
                    playing ? "musicNews_jp-pause" : "musicNews_jp-play"
                  }`}
                  onClick={handlePlay}
                ></button>
              </div>
            </div>

            {/* Player Control */}
            <div className="musicNews_player_controls">
              <div className="musicNews_jp-gui musicNews_jp-interface">
                <div className="musicNews_time_controls">
                  <div>
                    <div
                      className="musicNews_jp-current-time"
                      role="timer"
                      aria-label="time"
                    >
                      {formatTime(currentTime)}
                    </div>
                  </div>
                  <div className="musicNews_jp-player_controls">
                    <div className="musicNews_jp-seek-bar">
                      <input
                        className="musicNews_jp-player-bar-value"
                        type="range"
                        min={0}
                        max={duration}
                        step="0.1"
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
                      {formatTime(duration)}
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
                      max={1}
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      style={{
                        background: `linear-gradient(90deg, #5f5f5f ${
                          (volume / 1) * 100
                        }%, #989898 ${(volume / 1) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* No solution */}
            {loadError || playError ? (
              <div className="musicNews_jp-no-solution">
                <span>Update Required</span>
                <div>
                  To play the media you will need to either update your browser
                  to a recent version or update your{" "}
                  <a href="http://get.adobe.com/flashplayer/" target="_blank">
                    Flash plugin
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicNews_SinglePlayer;
