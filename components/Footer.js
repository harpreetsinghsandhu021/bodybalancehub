import React, { useRef } from "react";
import classes from "../styles/Header.module.css";

const Footer = () => {
  const sliderNav = useRef();
  const backdropRef = useRef();

  function handleNavbartoggle() {
    sliderNav.current.classList.toggle("move-rght");
    backdropRef.current.classList.toggle("d-none");
  }

  return (
    <footer>
      <div className={classes.inner__footer}>
        <p>
          <strong>
            Copyright 2023 by Premier Health Today. All rights reserved.{" "}
          </strong>
        </p>
        <p>
          This site is not a part of the Youtube website or Youtube Inc.
          Additionally, This site is NOT endorsed by Youtube in any way. YOUTUBE
          is a trademark of YOUTUBE, Inc.
        </p>
      </div>

      <header className={classes.header}>
        <div className={classes.inner__header}>
          <div className={`${classes.logo_box} ${classes.footer_logo_box}`}>
            <h1>
              <strong>BodyBalanceHub</strong>
            </h1>
          </div>
          <div onClick={handleNavbartoggle} className={classes.burger}>
            <span className={classes.line__1}></span>
            <span className={classes.line__2}></span>
            <span className={classes.line__3}></span>
          </div>
          <ul className={classes.links__wrapper}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/privacy-policy">privacy policy</a>
            </li>
            <li>
              <a href="/how-it-works">how it works</a>
            </li>
            <li>
              <a href="/faq">faq</a>
            </li>
          </ul>
        </div>

        <div ref={sliderNav} className={classes.slider__navbar}>
          <span onClick={handleNavbartoggle} className={classes.cross}>
            <img src="/images/cross.svg" />
          </span>
          <nav>
            <ul className={classes.navbar__links}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">about</a>
              </li>
              <li>
                <a href="/privacy-policy">privacy policy</a>
              </li>
              <li>
                <a href="/how-it-works">how it works</a>
              </li>
              <li>
                <a href="/faq">faq</a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          onClick={handleNavbartoggle}
          ref={backdropRef}
          className={classes.bckdrop}
        ></div>
      </header>
    </footer>
  );
};

export default Footer;
