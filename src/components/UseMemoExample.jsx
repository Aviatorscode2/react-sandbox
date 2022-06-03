import { useState, useMemo, useEffect, useRef } from 'react';

// the useMemo is mostly used when experencing performance issues
// Memoization is an optimization technique that speeds up performance by storing or caching the results of an expensive function(takes alot of time) call when the same input occur when it has the same arguments

// use Instance for useMemo is when you build appication can takes a lot of memory space
function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  //without using useMemo, the getSqrt() will run anything any change happens around the input or when the button is click, but we dont want that, we just wht the function to run only when the input value is increased, that's where useMemo comes in, passing the getSqrt() function into useMemo ensures that it only runs when the input value is changed, useMemo takes in a second value just like useEffect and useCallback
  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);
  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />

      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>
      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>
      <h1>Renders: {renders.current}</h1>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 0; i <= 1000; i++) {
    console.log(i);
  }
  console.log('Expensive function');
  return Math.sqrt(n);
}

export default UseMemoExample;
