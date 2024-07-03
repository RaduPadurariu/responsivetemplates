import React from "react";
import "./MusicAccount.css";
import { Link } from "react-router-dom";
const MusicAccount = () => {
  return (
    <div className="musicAccount">
      <ul className="musicAccount_ul">
        <li className="musicAccount_li">
          <Link to="#">Login</Link>
        </li>
        <li className="musicAccount_li">
          <Link to="#">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default MusicAccount;
