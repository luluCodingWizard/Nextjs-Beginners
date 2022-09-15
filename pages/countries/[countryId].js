// domain.com/countries/country

import React from "react";
import { useRouter } from "next/router";

export default function country() {
  const route = useRouter();
  const countryID = route.query.countryId;
  console.log(countryID);
  // use to query an api call to fetch country details
  return <div>country</div>;
}
