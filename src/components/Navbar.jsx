import {useState} from "react";
import HeaderLogo from "../assets/logo_zeppelins.svg";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18next";

const Navbar = () => {
  const {t} = useTranslation();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={HeaderLogo} alt="Logo" />
          </Link>

          <div className="hire-me-button">
            <div className="linkedin-icon">in</div>
            <span>Hire me</span>
          </div>
        </div>

        <div className="navbar">
          <select onChange={(e) => {
            i18n.changeLanguage(e.target.value)
          }} className="header__change-lng">
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>

          <ul className="nav-menu">
            <li>
              <Link to="/">{t("portfolio")}</Link>
            </li>
            <li>
              <Link to="/blog">{t("blog")}</Link>
            </li>
            <li>
              <Link to="/cv">{t("resume")}</Link>
            </li>
            <li>
              <Link to="/store">{t("store")}</Link>
            </li>
            <li>
              <Link to="/freelance">{t("freelance")}</Link>
            </li>
            <li>
              <Link to="/about">{t("about")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
