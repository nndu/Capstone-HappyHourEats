import "./Main.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import mainImg from "../../assets/mainImg.jpg";

function Main() {
  return (
    <>
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <a to="/" className="header__link">
            <img className="header__logo" src={logo} alt="logo" />
          </a>
        </div>
        <div className="header__navlist-container">
          <ul className="header__navlist">
            <li className="header__list-item">
              <a to="/" className="header__navlink">Happy Hour Search
              </a>
            </li>
            <li className="header__list-item">
              <a to="/" className="header__navlink">
                Special Event
              </a>
            </li>
          </ul>
        </div>

      </div>
    </header>
    <div className="main">
    <div className="main__container">
            <img className="mainImage" src={mainImg} alt="mainImg"></img>
        </div>
    </div>
    </>
  );
}

export default Main;