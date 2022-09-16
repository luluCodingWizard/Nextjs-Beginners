import React from "react";
import PropTypes from "prop-types";

function CountryCard({ countryName, population, region, capital }) {
  return (
    <div>
      <h3>{countryName}</h3>
      <p>
        <span>Population:</span> {population}
      </p>
      <p>
        <span>Region:</span> {region}
      </p>
      <p>
        <span>Capital:</span> {capital}
      </p>
    </div>
  );
}

CountryCard.propTypes = {};

export default CountryCard;
