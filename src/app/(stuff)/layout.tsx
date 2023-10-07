"use client";
import styles from "./styles.module.css";
import React from "react"; 
import Navbar from "./components/navbar/nav";

export default function StuffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.page}>
      <Navbar />
      {children}
    </div>
  );
}
