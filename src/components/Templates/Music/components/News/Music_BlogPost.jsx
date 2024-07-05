import React from "react";
import "./MusicNews.css";
import MusicNews_SinglePlayer from "./MusicNews_SinglePlayer";

const Music_BlogPost = ({
  month,
  date,
  year,
  imgSrc,
  postTitle,
  commentsNr,
  postText,
  imgOn,
}) => {
  return (
    <div className="musicBlog_blog_post">
      <div className="musicBlog_blog_post_date">
        <div>{month}</div>
        <div>{date}</div>
        <div>{year}</div>
      </div>

      <div className="musicBlog_blog_post_image">
        {imgOn ? (
          <img src={imgSrc} alt="no-img" />
        ) : (
          <div className="musicBlog_noImg"></div>
        )}
        {imgOn ? false : <MusicNews_SinglePlayer />}
      </div>
      <div className="musicBlog_blog_post_title">
        <h2>
          <a href="#">{postTitle}</a>
        </h2>
      </div>
      <div className="musicBlog_blog_post_info">
        <ul className="">
          <li>
            by <a href="#">Admin</a>
          </li>
          <li>
            <a href="#">{commentsNr} Comments</a>
          </li>
        </ul>
      </div>
      <div className="musicBlog_blog_post_text">
        <p>{postText}</p>
      </div>
    </div>
  );
};

export default Music_BlogPost;
