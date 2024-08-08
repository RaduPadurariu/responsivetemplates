import { AiOutlineSend } from "react-icons/ai";
import "./GamesFooter.css";
const GamesFooter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="games_footer_container">
      <div className="games_footer-top">
        <div className="games_footer-content games_subContainer">
          <div className="games_footer-item ">
            <a href="#" className="games_navbar-brand ">
              cool <span>games</span>
            </a>
            <p className="games_para-text games_footer-brand ">
              Lorem ipsum dolor sitamt consectue adispicing duis soolici tudin
              ague suisomid. Nulla vullam dolor.
            </p>
          </div>

          <div className="games_footer-item">
            <h5 className="games_footer-item-title">quick links</h5>
            <ul className="games_footer-item-links">
              <li>
                <a href="#" className="games_footer-link">
                  Gaming
                </a>
              </li>
              <li>
                <a href="#" className="games_footer-link">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="games_footer-link">
                  Social Network
                </a>
              </li>
              <li>
                <a href="#" className="games_footer-link">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="games_footer-item">
            <h5 className="games_footer-item-title">Supports</h5>
            <ul className="games_footer-item-links">
              <li>
                <a href="#" className="games_footer-link">
                  Setting & Privacy
                </a>
              </li>
              <li>
                <a href="#" className="games_footer-link">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="games_footer-link">
                  Live Actions
                </a>
              </li>
              <li>
                <a href="#" className="games_footer-link">
                  Our News
                </a>
              </li>
            </ul>
          </div>

          <div className="games_footer-item">
            <h5 className="games_footer-item-title">newsletter</h5>
            <p className="games_para-text">
              Subscribe our newsletter to get our latest update & news.
            </p>

            <form
              action="#"
              className="games_newsletter-form"
              onSubmit={handleSubmit}
            >
              <div className="games_input-group">
                <input
                  type="text"
                  className="games_input-group-field"
                  placeholder="Your email address"
                />
                <button type="submit" className="games_input-group-btn">
                  <AiOutlineSend size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="games_footer-bottom">
        <div className="games_subContainer">
          <p className="games_footer-bottom-text">
            Copyright &copy; 2024 Radu Padurariu & GeekProbin - All rights
            reserved.
          </p>
          <ul className="games_footer-bottom-links">
            <li>
              <a href="#" className="games_footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="games_footer-link">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="games_footer-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="games_footer-link">
                Terms & conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GamesFooter;
