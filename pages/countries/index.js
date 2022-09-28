// domain.com/countries

import React from "react";
import Header from "../../components/Header";
import CountryCard from "../../components/countryCard";
import styles from "./countries.module.css";

export default function countries({ countries }) {
  return (
    <div>
      <Header />
      <div className={styles.contries_wrapper}>
        {countries.map((country) => (
          <CountryCard
            countryName={country.name.common}
            region={country.region}
            capital={country.capital}
            className={styles.country}
            population={country.population}
            flag={country.flags.svg}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return {
    props: { countries: data },
  };
};
