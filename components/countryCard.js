import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import Image from "next/image";

function CountryCard({ countryName, population, region, capital, className }) {
  return (
    <div className={`${className} ${styles.card}`}>
      <div>
        <Image src="/australia.png" alt="australia flag" layout="fill" />
      </div>
      <h3 className="title">{countryName}</h3>
      <p>
        <span className={styles.bold}>Population:</span>
        <span className={styles.greyText}>{population}</span>
      </p>
      <p>
        <span className={styles.bold}>Region:</span>
        <span className={styles.greyText}>{region}</span>
      </p>
      <p>
        <span className={styles.bold}>Capital:</span>
        <span className={styles.greyText}>{capital}</span>
      </p>
    </div>
  );
}

CountryCard.propTypes = {};

export default CountryCard;
