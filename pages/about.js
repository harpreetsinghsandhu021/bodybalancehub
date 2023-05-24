import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const about = () => {
  return (
    <>
      <Header />
      <section className="blog">
        <h5>
          Welcome to our health niche blog! We're a team of passionate
          individuals committed to providing reliable and trustworthy
          information on health-related topics. Our goal is to empower our
          readers with the knowledge they need to make informed decisions about
          their health and wellbeing.
        </h5>
        <img src="https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=800" />

        <h1>Our Mission</h1>
        <p>
          We're a health niche blog dedicated to providing reliable information
          on nutrition, fitness, mental health, disease prevention, and
          treatment options.
        </p>
        <p>
          Our team of experienced writers, medical professionals, and health
          enthusiasts delivers accurate and up-to-date content that simplifies
          complex topics and offers practical advice.
        </p>

        <p>
          We value our readers' feedback and encourage engagement through
          comments, emails, and social media to build a community of like-minded
          individuals focused on promoting healthy living.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default about;
