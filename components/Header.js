import React, { useRef } from "react";
import classes from "../styles/Header.module.css";

const Header = () => {
  const sliderNav = useRef();
  const backdropRef = useRef();

  function handleNavbartoggle() {
    sliderNav.current.classList.toggle("move-rght");
    backdropRef.current.classList.toggle("d-none");
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.inner__header}>
          <div className={classes.logo_box}>
            <a href="/">
              <h1>
                <strong>BodyBalanceHub</strong>
              </h1>
            </a>
          </div>

          <ul className={classes.links__wrapper}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/reviews">reviews</a>
            </li>
            <li>
              <a href="/references">references</a>
            </li>
            <li>
              <a href="/shipping">shipping</a>
            </li>
            <li>
              <a href="/articles">articles</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
          <div onClick={handleNavbartoggle} className={classes.burger}>
            <span className={classes.line__1}></span>
            <span className={classes.line__2}></span>
            <span className={classes.line__3}></span>
          </div>
        </div>
      </header>
      <div
        onClick={handleNavbartoggle}
        ref={backdropRef}
        className={classes.bckdrop}
      ></div>
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
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/reviews">reviews</a>
            </li>
            <li>
              <a href="/references">references</a>
            </li>
            <li>
              <a href="/shipping">shipping</a>
            </li>
            <li>
              <a href="/articles">articles</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
