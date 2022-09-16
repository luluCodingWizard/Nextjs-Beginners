import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>where is the world?</h1>
      <div>Dark Mode</div>
    </header>
  );
}
