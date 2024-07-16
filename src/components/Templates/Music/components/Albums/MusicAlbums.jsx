import React, { useEffect, useState } from "react";
import "./MusicAlbums.css";
import MusicHeadTitle from "../../common/HeadTitle/MusicHeadTitle";
import MusicAlbum from "./MusicAlbum";
import MusicHome_Artist_content from "../Home/MusicHome_Artist_content";
import { musicAlbums } from "./MusicAlbumTrackList";

const MusicAlbums = () => {
  const milestonesList = [
    {
      id: 1,
      milestone: "Albums Sold",
      counts: "11",
      milestone_src: "/images/Music/icon_1.svg",
    },
    {
      id: 2,
      milestone: "Live Concerts",
      counts: "487",
      milestone_src: "/images/Music/icon_2.svg",
    },
    {
      id: 3,
      milestone: "Awards Won",
      counts: "5",
      milestone_src: "/images/Music/icon_3.svg",
    },
    {
      id: 4,
      milestone: "Platinium Certificates",
      counts: "56",
      milestone_src: "/images/Music/icon_4.svg",
    },
  ];
  const [milestones, setMilestones] = useState(milestonesList.map(() => 0));
  const [milestoneEnterFlag, setMilestoneEnterFlag] = useState(false);

  const milestoneInterval = () => {
    if (!milestoneEnterFlag) {
      setMilestoneEnterFlag(true);
    }
  };

  useEffect(() => {
    let timers = [];

    if (milestoneEnterFlag) {
      milestonesList.forEach((milestoneItem, index) => {
        const maxValue = parseInt(milestoneItem.counts);
        const step = maxValue / (2000 / 100);
        const timer = setInterval(() => {
          setMilestones((prevMilestones) => {
            const newMilestones = [...prevMilestones];
            if (newMilestones[index] < maxValue) {
              newMilestones[index] += step;
              if (newMilestones[index] > maxValue) {
                newMilestones[index] = maxValue;
              }
            } else {
              clearInterval(timers[index]);
            }
            return newMilestones;
          });
        }, 100);
        timers.push(timer);
      });
    }

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [milestoneEnterFlag, milestonesList]);

  return (
    <div>
      <MusicHeadTitle
        subTitle="Katie Melua"
        title="Discography"
        backImg="/images/Music/about.jpg"
      />
      <div className="musicAlbums_discs">
        <div className="musicHome_container">
          <ul className="musicHome_subContainer musicAlbums_disc_rows">
            {musicAlbums.slice(1).map((item) => {
              return <MusicAlbum key={item.id} item={item} />;
            })}
          </ul>
        </div>
      </div>

      <div className="musicAlbums_artist">
        <div className="musicAlbums_artist_wallpaper"></div>
        <div className="musicHome_container">
          <div className="musicHome_subContainer ">
            <div className="musicAlbums_artist_container">
              <MusicHome_Artist_content />
            </div>
          </div>
        </div>
      </div>

      <div className="musicAlbums_milestones" onMouseEnter={milestoneInterval}>
        <div className="musicAlbums_milestones_container">
          <div className="musicAlbums_milestones_wallpaper"></div>
          <div className="musicHome_container">
            <div className="musicHome_subContainer musicAlbums_milestones_row">
              {milestonesList.map((el, i) => {
                return (
                  <div key={i} className="musicAlbums_milestone_col">
                    <div className="musicAlbums_milestone">
                      <div className="musicAlbums_milestone_icon">
                        <img src={el.milestone_src} alt="no-milestone-img" />
                      </div>
                      <div className="musicAlbums_milestone_content">
                        <div className="musicAlbum_milestone_counter">
                          {Math.round(milestones[i])}
                          {el.id === 1 ? (
                            <span style={{ fontSize: "22px" }}>millions</span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="musicAlbum_milestone_text">
                          {el.milestone}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicAlbums;
