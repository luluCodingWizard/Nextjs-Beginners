// domain.com/countries/country

import React from "react";
import styles from "./country.module.css";

export default function country({ countryDetails }) {
  // use to query an api call to fetch country details
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn}>Back</button>
      <div className={styles.flex}>
        <img
          className={styles.img}
          src={countryDetails[0].flags.svg}
          alt="flag"
        />
        <div className={styles.details}>
          <h3>{countryDetails[0].name.common}</h3>

          <p>
            Population:{" "}
            <span className={styles.grey}>{countryDetails[0].population}</span>
          </p>
          <p>
            Region:{" "}
            <span className={styles.grey}>{countryDetails[0].region}</span>
          </p>
          <p>
            Sub Region:{" "}
            <span className={styles.grey}>{countryDetails[0].subregion}</span>
          </p>
          <p>
            UN member:{" "}
            <span className={styles.grey}>{countryDetails[0].unMember}</span>
          </p>
          <p>
            Capital:{" "}
            <span className={styles.grey}>{countryDetails[0].capital[0]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const countryName = context.params.countryName;
  const response = await fetch(
    "https://restcountries.com/v3.1/name/" + countryName
  );
  const data = await response.json();
  return {
    props: { countryDetails: data },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  const paths = data.map((country) => {
    return {
      params: {
        countryName: country.name.common.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
