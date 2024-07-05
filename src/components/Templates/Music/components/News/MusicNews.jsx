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
                <MusicNews_SinglePlayer />
              </Music_BlogPost>
              <Music_BlogPost {...musicBlog_data[2]} />
              <div className="musicBlog_load_more">
                <div className="musicBlog_loadBtn">
                  <a href="#">Load More</a>
                </div>
              </div>
            </div>

            <div className="musicBlog_sideBar">Aiurea in tramvai</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicNews;
