// domain.com/countries/country

import React from "react";
import { useRouter } from "next/router";

export default function country() {
  // use to query an api call to fetch country details
  return <div>country</div>;
}

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
