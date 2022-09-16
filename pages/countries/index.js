// domain.com/countries

import React from "react";
import CountryCard from "../../components/countryCard";

export default function countries() {
  return (
    <div>
      <h1>Countries</h1>
      <CountryCard
        countryName="australia"
        region="australia"
        capital="canberra"
      />
    </div>
  );
}
