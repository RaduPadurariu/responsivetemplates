import React from "react";
import "./MusicNews.css";
import MusicHeadTitle from "../../common/HeadTitle/MusicHeadTitle";
import Music_BlogPost from "./Music_BlogPost";
import musicBlog_data from "./MusicNews_data";
import MusicNews_SinglePlayer from "./MusicNews_SinglePlayer";
const MusicNews = () => {
  return (
    <div>
      <MusicHeadTitle
        subTitle="Katie Melua"
        title="The Blog"
        backImg="/images/Music/blog.jpg"
      />
      <div className="musicBlog">
        <div className="musicBlog_container">
          <div className="musicBlog_subContainer">
            {/* Blog post */}

            <div className="musicBlog_blog_posts">
              <Music_BlogPost {...musicBlog_data[0]} />
              <Music_BlogPost {...musicBlog_data[1]}>
                <MusicNews_SinglePlayer
                  song="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
                  playerBackground="#2b2b2b"
                  songTitle="Song Title"
                  playerColor="#fff"
                />
              </Music_BlogPost>
              <Music_BlogPost {...musicBlog_data[2]} />
              <div className="musicBlog_load_more">
                <div className="musicBlog_loadBtn">
                  <a href="#">Load More</a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="musicNews_sideBar_container">
              <div className="musicNews_sideBar">
                <div className="musicNews_sideBar_section">
                  <div className="musicNews_sideBar_title">Archive</div>
                  <div className="musicNews_sideBar_list">
                    <ul>
                      <li>
                        <a href="#">February 2017</a>
                      </li>
                      <li>
                        <a href="#">September 2017</a>
                      </li>
                      <li>
                        <a href="#">May 2018</a>
                      </li>
                      <li>
                        <a href="#">June 2018</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="musicNews_sideBar_section">
                  <div className="musicNews_sideBar_title">Categories</div>
                  <div className="musicNews_sideBar_list">
                    <ul>
                      <li>
                        <a href="#">Audio</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Photos</a>
                      </li>
                      <li>
                        <a href="#">Releases</a>
                      </li>
                      <li>
                        <a href="#">Uncategorized</a>
                      </li>
                      <li>
                        <a href="#">Video</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="musicNews_sideBar_section">
                  <div className="musicNews_sideBar_title">Latest News</div>
                  <div className="musicNews_latest_news_list">
                    <div className="musicNews_latest_news">
                      <div className="musicNews_latest_news_image">
                        <img
                          src="/images/Music/latest_1.jpg"
                          alt="https://unsplash.com/@dannykekspro"
                        />
                      </div>
                      <div className="musicNews_latest_news_content">
                        <div className="musicNews_latest_news_date">
                          <a href="#">July 26, 2018</a>
                        </div>
                        <div className="musicNews_latest_news_title">
                          <a href="#">How to get the best playlist</a>
                        </div>
                      </div>
                    </div>

                    <div className="musicNews_latest_news">
                      <div className="musicNews_latest_news_image">
                        <img
                          src="/images/Music/latest_2.jpg"
                          alt="https://unsplash.com/@rexcuando"
                        />
                      </div>
                      <div className="musicNews_latest_news_content">
                        <div className="musicNews_latest_news_date">
                          <a href="#">July 26, 2018</a>
                        </div>
                        <div className="musicNews_latest_news_title">
                          <a href="#">How to get the best playlist</a>
                        </div>
                      </div>
                    </div>

                    <div className="musicNews_latest_news">
                      <div className="musicNews_latest_news_image">
                        <img
                          src="/images/Music/latest_3.jpg"
                          alt="https://unsplash.com/@arstyy"
                        />
                      </div>
                      <div className="musicNews_latest_news_content">
                        <div className="musicNews_latest_news_date">
                          <a href="#">July 26, 2018</a>
                        </div>
                        <div className="musicNews_latest_news_title">
                          <a href="#">How to get the best playlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicNews;
