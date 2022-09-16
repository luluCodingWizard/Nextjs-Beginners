// domain.com/

import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/countries"> get list of countries</Link>
    </div>
  );
}
