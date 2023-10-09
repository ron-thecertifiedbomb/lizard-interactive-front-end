'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/redux/slices/counterSlice';
import { RootState, AppDispatch } from '@/redux/store';

const CounterButtons = () => {

    
    const dispatch: AppDispatch = useDispatch();

  return (
    <div className='flex gap-2'>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default CounterButtons