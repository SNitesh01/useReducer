import React, { useReducer } from 'react';
function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return state + action.step;

    case 'dec':
      return state - action.step;

    default:
      return state;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 10);

  return (
    <>
      <button onClick={() => dispatch({ type: 'dec', step: 5 })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: 'inc', step: 5 })}>+</button>
    </>
  );
}
