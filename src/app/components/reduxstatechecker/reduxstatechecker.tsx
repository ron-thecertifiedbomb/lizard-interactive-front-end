'use client'
import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; 

const ReduxStateCheckerOne = () => {

  const message = useSelector((state: RootState) => state.connection.message);


  return (
    <div>
    <p>Current Message ReduxChecker I: {message}</p>
      </div>
  )
}

export default ReduxStateCheckerOne