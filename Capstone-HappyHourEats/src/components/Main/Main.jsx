import "./Main.scss";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import logo1 from "../../assets/logo1.jpg";
import mainImg from "../../assets/foodAndDrink.jpg";
import resImg from "../../assets/mainImg.jpg";
import SlideShow from "../SlideShow/SlideShow"

function Main() {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__logo-container">
                        <a to="/" className="header__link">
                            <img className="header__logo" src={logo1} alt="logo" />
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
                            <li className="header__list-item">
                                <a to="/" className="header__navlink header__navlink-1">
                                    <img className="header__userlogo" src={user} alt="logo" />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>
            <div className="main">
                <div className="main__container">
                    <img className="mainImage" src={mainImg} alt="mainImg" />
                    <div className="search">
                        <div className="search__holder">
                            <h1>Explore restaurants featuring a curated Happy Hour menu</h1>
                            <input className="search__input" placeholder="Search for Destination, location..." type="text"></input>
                        </div>
                    </div>

                </div>
            </div>
            <SlideShow/>
        </>
    );
}

export default Main;