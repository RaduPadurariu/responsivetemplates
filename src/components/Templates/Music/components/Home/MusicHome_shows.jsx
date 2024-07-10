import React from "react";
import "./MusicHome.css";

const shows = [
  {
    date: "18/07",
    festival: "Electric Castle Festival",
    location: "Cluj, Romania",
  },
  {
    date: "20/07",
    festival: "Ultra Music Festival",
    location: "Miami, USA",
  },
  {
    date: "03/08",
    festival: "Untold Festival",
    location: "Cluj, Romania",
  },
  {
    date: "11/08",
    festival: "Electric Castle Festival",
    location: "Cluj, Romania",
  },
  {
    date: "18/08",
    festival: "Electric Castle Festival",
    location: "Cluj, Romania",
  },
  {
    date: "25/08",
    festival: "Electric Castle Festival",
    location: "Cluj, Romania",
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
            <a href="#">Buy Tickets</a>
          </div>
        </div>
      </li>
    );
  });
};

export default MusicHome_shows;
