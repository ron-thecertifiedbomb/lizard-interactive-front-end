"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '@/redux/slices/connectionSlice';
import { RootState } from "@/redux/store"; 
import ReduxStateCheckerOne from '../components/reduxstatechecker/reduxstatechecker';
import ReduxStateCheckerTwo from '../components/reduxstatecheckertwo/reduxstatecheckertwo';



const ReduxData = () => {

  const dispatch = useDispatch();

  const message = useSelector((state: RootState) => state.connection.message);
  const [inputMessage, setInputMessage] = useState('');

  // Function to handle text input changes
  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputMessage(e.target.value);
  };

  // Function to dispatch the setMessage action with the new message
  const handleSetMessage = () => {
    dispatch(setMessage(inputMessage));
    setInputMessage('')
  };

  return (
    <div>
      <h1>Redux Data</h1>
      <ReduxStateCheckerOne />
      <ReduxStateCheckerTwo />
      <input
        type="text"
        placeholder="Enter a new message"
        value={inputMessage}
        onChange={handleInputChange}
        className=' text-black'
      />
      <button onClick={handleSetMessage}>Set Message</button>
    </div>
  );
};

export default ReduxData;
