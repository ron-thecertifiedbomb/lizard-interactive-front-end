'use client'
import React from "react";
import { useSelector } from "react-redux";
import RootLayout from "./layout";
import Counter from "./components/counter/counter";
import { RootState } from "@/redux/store"; 
import CounterButtons from "./components/counter/counterbuttons";
import ReduxStateCheckerOne from "@/components/reduxstatechecker";

const HomePage = () => {
  
  const message = useSelector((state: RootState) => state.connection.message);

  return (
    <RootLayout>
      <Counter />
      <CounterButtons />
     
    </RootLayout>
  );
};

export default HomePage;