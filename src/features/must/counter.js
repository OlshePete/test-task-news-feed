import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  getData,
} from './mustSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
     
        <button
          className="asyncButton"
          onClick={() => dispatch(getData())}
        >
          Add Async
        </button>
    
    </div>
  );
}
