import { useState, useRef, useEffect } from 'react';
import { renderMatches } from 'react-router-dom';

// How to use useRef to get previous state, there might be instance when you will need to get the previous state of a value or so, you can use use useRef.
function UseRefExample2() {
  const renders = useRef(1); //you can set an initial state for useRef
  const prevName = useRef(''); //to get the previous name/value typed
  const [name, setName] = useState('');

  useEffect(() => {
    renders.current = renders.current + 1; //in this case each time the input state changes, the number of renders increases from 1 to the number of input type.
    // to get the previous value in the state
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      {/* this h2 will output the previous state of the input, e.g when i type in "Previous" to the input field, the previous state will be "Previou" without the "s*/}
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
}

export default UseRefExample2;
