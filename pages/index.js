// domain.com/

import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.home}>
        <h1>Home</h1>
        <Link href="/countries"> get list of countries</Link>
      </div>
    </div>
  );
}
