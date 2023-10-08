"use client";
import React from "react";
import RootLayout from "./layout";
import Counter from "./components/counter/counter";

const HomePage = () => {
  return (
    <RootLayout>
      <Counter />
    </RootLayout>
  );
};

export default HomePage;
