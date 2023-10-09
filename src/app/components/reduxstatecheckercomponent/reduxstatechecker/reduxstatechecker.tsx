'use client'
import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; 

const ReduxStateCheckerOne = () => {

  const message = useSelector((state: RootState) => state.connection.message);


  return (
    <>
    <p>Component 1: {message}</p>
      </>
  )
}

export default ReduxStateCheckerOne