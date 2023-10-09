'use client'
import React from 'react';
import { useSelector} from 'react-redux';
import { RootState} from '@/redux/store';

const Counter: React.FC = () => {
  
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
     
    </div>
  );
};

export default Counter;
