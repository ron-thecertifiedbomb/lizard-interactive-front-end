"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "@/redux/slices/connectionSlice";

const TextField = () => {
  const dispatch = useDispatch();

  const [inputMessage, setInputMessage] = useState("");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage(e.target.value);
  };

  const handleSetMessage = () => {
    dispatch(setMessage(inputMessage));
    setInputMessage("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter a new message"
        value={inputMessage}
        onChange={handleInputChange}
        className=" text-black"
      />
      <button onClick={handleSetMessage}>Set Message</button>
    </>
  );
};

export default TextField;
