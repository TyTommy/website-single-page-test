import React from "react";
import "./HeroStyles.css";
import HeroImg from "../assets/hero-img.png";
import Twitter from '../assets/twitter.png';
import Linkedin from '../assets/linkedin.png';
import Medium from '../assets/medium.png';
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18next";

const Hero = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__title">
            <h1>{t("blogPost")}</h1>
            <h2>{t("title")}</h2>
            <p>
            {t("description")}
            </p>
            <div className="hero__social">
                <div className="twitter-btn"> <img src={Twitter} /><a className="twitter" href="https://x.com/i/flow/login" style={{color:'white'}}>TWITTER</a></div>
                <div className="linkedin-btn"> <img src={Linkedin} /><a className="linkedin" href="https://www.linkedin.com/login/ru" style={{color:'white'}}>LINKEDIN</a></div>
                <div className="medium-btn"> <img src={Medium} /><a className="medium" href="https://medium.com/" style={{color:'white'}}>MEDIUM</a></div>
            </div>
          </div>
          <div className="hero__img">
            <img src={HeroImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;