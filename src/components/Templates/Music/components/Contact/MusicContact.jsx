import React from "react";
import "./MusicContact.css";
import MusicHeadTitle from "../../common/HeadTitle/MusicHeadTitle";
const MusicContact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="musicContact_body">
      <MusicHeadTitle
        subTitle="Katie Melua"
        title="Contact"
        backImg="/images/Music/contact.jpg"
      />
      <div className="musicContact">
        <div className="musicContact_container">
          {/* Form Container */}
          <div className="musicContact_form_container">
            <div className="musicContact_title">Send us a message</div>
            <form
              onSubmit={handleSubmit}
              action="#"
              className="musicContact_form"
              id="musicContact_form"
            >
              <input
                type="text"
                className="musicContact_input"
                placeholder="Name"
                required="required"
                name="contact_name"
                id="contact_name"
              />
              <input
                type="email"
                className="musicContact_input"
                placeholder="E-mail"
                required="required"
                name="contact_email"
                id="contact_email"
              />
              <input
                type="text"
                className="musicContact_input"
                placeholder="Subject"
                required="required"
                name="contact_subject"
                id="contact_subject"
              />
              <textarea
                style={{ height: "161px", width: "100%" }}
                name="contact_textarea"
                id="contact_textarea"
                className="musicContact_input musicContact_textarea"
                placeholder="Message"
                required="required"
              ></textarea>
              <button type="submit" className="musicContact_button">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact infos */}

          <div className="musicContact_infos">
            <div className="musicContact_title">Where to find us</div>
            <div className="musicContact_text">
              <p>
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                Maecenas sollicitudin est in libero pretium interdum. Nullam
                volutpat dui sem, ac congue purus luctus nec. Curabitur luctus
                luctus erat, sit amet facilisis quam congue quis. Quisque ornare
                luctus erat id dignissim. Nullam ac nunc quis ex porttitor
                luctus.
              </p>
            </div>

            <div className="musicContact_info_list">
              <ul className="musicContact_info_ul">
                <li className="musicContact_ul_li">
                  <div>
                    <div>Address</div>
                  </div>
                  <div>1481 Creekside Lane Avila Beach, CA 931</div>
                </li>
                <li className="musicContact_ul_li">
                  <div>
                    <div>Phone</div>
                  </div>
                  <div>+53 345 7953 32453</div>
                </li>
                <li className="musicContact_ul_li">
                  <div>
                    <div>E-mail</div>
                  </div>
                  <div>yourmail@gmail.com</div>
                </li>
              </ul>
            </div>

            <div className="musicContact_social">
              <ul className="musicContact_social_ul">
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicContact;
