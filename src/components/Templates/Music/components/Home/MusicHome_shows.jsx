import React from "react";
import "./MusicHome.css";

const shows = [
  {
    date: "22/11",
    festival: "Metropol Theater Bremen",
    location: "Bremen, Germany",
  },
  {
    date: "28/11",
    festival: "Congress Center Hamburg",
    location: "Hamburg, Germany",
  },
  {
    date: "29/08",
    festival: "Roundhouse",
    location: "London, England",
  },
  {
    date: "25/08",
    festival: "Borggården",
    location: "Trondheim, Norway",
  },
  {
    date: "23/08",
    festival: "Botanical Gardens",
    location: "Girona, Spain",
  },
  {
    date: "23/02",
    festival: "Palais des Congres",
    location: "Paris, France",
  },
];

const MusicHome_shows = () => {
  return shows.map((el, i) => {
    return (
      <li key={i + 1} className="">
        <div>
          <div className="musicHome_show_date">{el.date}</div>
        </div>
        <div className="musicHome_show_info">
          <div className="musicHome_show_name">
            <a href="#">{el.festival}</a>
          </div>
          <div className="musicHome_show_location">{el.location}</div>
        </div>
        <div className="musicHome_show_ticket ml-auto">
          <div className="musicHome_show_shop">
            <a href="#">
              Buy <span className="musicHome_show_shop_buy">Tickets</span>
            </a>
          </div>
        </div>
      </li>
    );
  });
};

export default MusicHome_shows;
