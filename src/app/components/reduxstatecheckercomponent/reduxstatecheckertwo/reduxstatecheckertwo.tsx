'use client'
import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; 

const ReduxStateCheckerTwo = () => {

  const message = useSelector((state: RootState) => state.connection.message);
  return (
    <div>
        <p>Component 2: {message}</p>
      </div>
  )
}

export default ReduxStateCheckerTwo