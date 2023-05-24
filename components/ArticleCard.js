import React from "react";
import classes from "../styles/card.module.css";

const ArticleCard = (props) => {
  return (
    <div className={classes.article__card}>
      <div className="flex">
        <div className={classes.img_wrap}>
          <img src={props.imgSrc} />
        </div>
        <div className={classes.cnt}>
          <h3>{props.heading}</h3>
          <p>{props.subHeading} </p>
          <a href={props.href} className={"ctx--btn"}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
