import React from "react";
import classes from "../styles/card.module.css";

const BookCard = (props) => {
  return (
    <div className={classes.article__card}>
      <div className="flex-top">
        <div className={classes.img_wrap}>
          <img src={props.imgSrc} />
        </div>
        <div className={classes.cnt}>
          <h3>{props.heading}</h3>
          <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
          <a href={props.href} className={"ctx--btn"}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
