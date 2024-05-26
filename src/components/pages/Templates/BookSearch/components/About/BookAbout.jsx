import React from "react";
import "./BookAbout.css";
import aboutImg from "/images/BookSearch/about-img.jpg";

const BookAbout = () => {
  return (
    <section className="bookAbout">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>

          <div className="about-text">
            <h2 className="about-title fs-26 ls-1"> About BookHub</h2>
            <p className="fs-17">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur dolorem dicta inventore voluptatum asperiores fugiat
              esse ipsa ab cupiditate odio maxime atque temporibus vero magni,
              culpa nam alias? Ducimus delectus esse animi, veritatis ex magni
              assumenda illum pariatur fuga id.
            </p>
            <p className="fs-17">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, placeat. Sequi libero similique beatae temporibus
              error. Quos, soluta? Culpa expedita, in illum ut unde fugit.
              Suscipit vitae similique totam eos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAbout;
