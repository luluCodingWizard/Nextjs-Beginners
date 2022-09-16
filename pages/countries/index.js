// domain.com/countries

import React from "react";
import Header from "../../components/Header";
import CountryCard from "../../components/countryCard";
import styles from "./countries.module.css";

export default function countries() {
  return (
    <div>
      <Header />
      <div className={styles.contries_wrapper}>
        <CountryCard
          countryName="australia"
          region="australia"
          capital="canberra"
          className={styles.country}
          population={749873497834}
        />
        <CountryCard
          countryName="australia"
          region="australia"
          capital="canberra"
          population={749873497834}
          className={styles.country}
        />
        <CountryCard
          countryName="australia"
          region="australia"
          capital="canberra"
          population={749873497834}
          className={styles.country}
        />
        <CountryCard
          countryName="australia"
          region="australia"
          capital="canberra"
          population={749873497834}
          className={styles.country}
        />
        <CountryCard
          countryName="australia"
          region="australia"
          capital="canberra"
          population={749873497834}
          className={styles.country}
        />
      </div>
    </div>
  );
}
