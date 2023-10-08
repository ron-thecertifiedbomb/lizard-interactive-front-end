'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/redux/slices/counterSlice';
import { RootState, AppDispatch } from '@/redux/store';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
};

export default Counter;
