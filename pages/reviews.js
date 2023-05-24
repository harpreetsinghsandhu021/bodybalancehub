import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const reviews = () => {
  return (
    <>
      <Header />
      <div className="section--articles">
        <h1 className="heading">Reviews</h1>
        <ul className="article--wrapper">
          <h5>Reviews of The Obesity Code</h5>
          <img src="/images/rev1.webp" />
          <h5>Reviews of The Happy Hormone Guide</h5>
          <img src="/images/rev2.webp" />
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default reviews;
