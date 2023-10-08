'use client'
import React from "react";
import { useSelector } from "react-redux";
import RootLayout from "./layout";
import Counter from "./components/counter/counter";
import { RootState } from "@/redux/store"; 

const HomePage = () => {
  
  const message = useSelector((state: RootState) => state.connection.message);

  return (
    <RootLayout>
      <Counter />
      {message && <div>{message}</div>}
    </RootLayout>
  );
};

export default HomePage;