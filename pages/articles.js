import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

const articles = () => {
  return (
    <>
      <Header />
      <div className="section--articles">
        <h1 className="heading">Articles</h1>
        <ul className="article--wrapper">
          <ArticleCard
            imgSrc={"/images/card1.jpg"}
            href="/odjnknkjjj"
            heading="TOP DENTIST SECRETS: Do This For 20 Seconds Each Day"
            subHeading="Make sure your sound is turned on. Please wait up to 10 seconds for the video to load. This technique has proven so successful that even other dentists have been surprised by its results."
          />
          <ArticleCard
            imgSrc={
              "https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            href="/busting-10-famous-diet-myths-for-you"
            heading="Busting 10 Famous Diet Myths For You"
            subHeading="When it comes to diet and nutrition, it's no surprise that there is a lot of misinformation and confusion out there. With the rise of social media, it's become easier than ever to spread false information about diet and nutrition."
          />
          <ArticleCard
            imgSrc={
              "https://media.istockphoto.com/id/1345071094/photo/november-prostate-cancer-awareness-month-man-in-blue-shirt-with-hand-holding-blue-ribbon-for.jpg?b=1&s=612x612&w=0&k=20&c=NmfRCpvFXuIJ1AEjXP7yc9KHL56QrnRrNPdFxgWR8Fk="
            }
            href="/tips-on-keeping-your-prostate-healthy"
            heading="Tips on keeping your prostate healthy"
            subHeading="The prostate is a small gland found in the male reproductive system. It is located just below the bladder and produces a fluid that is part of the semen. Prostate health is important for overall male health, as it can affect fertility, erectile dysfunction, and even the risk of prostate cancer. "
          />
          <ArticleCard
            imgSrc={
              "https://images.pexels.com/photos/6192337/pexels-photo-6192337.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            href="/scientifically-proven-formula-to-improve-brain-function"
            heading="Scientifically Proven Formula to improve brain function"
            subHeading="Brain power is the cognitive ability to think, reason, remember, and problem-solve. It is one of the most important skills to have in life, as it can help you to be successful in your career, relationships, and personal goals. Improving your brain power can help you to think more clearly and make better decisions."
          />
          <ArticleCard
            imgSrc={
              "https://images.pexels.com/photos/946727/pexels-photo-946727.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            href="/struggling-to-improve-your-vision"
            heading="Struggling to improve your vision? Read this!"
            subHeading="Vision improvement is the process of improving one's vision and preventing further deterioration of eyesight. It can be achieved naturally by focusing on healthy lifestyle habits and eating habits. By making simple changes in your lifestyle....."
          />
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default articles;
