import React from "react";
import styles from "./card.module.scss";
import Button from "../Button"; 
import { Icon } from "@iconify/react";

function Card({ image, title, description, buttonText, onButtonClick, rating, className }) {
  return (
    <div className={`${styles.card} ${className}`}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <Button
            text={buttonText}
            clickHandler={onButtonClick}
            className={styles.cardButton}
          />
          <div className={styles.rating}>
            <Icon icon="ic:round-star" className={styles.starIcon}  />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
