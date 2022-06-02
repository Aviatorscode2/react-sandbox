import { useRef } from 'react';

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value); //using this current.value I can get the value typed into the input field
    inputRef.current.value = 'Hello'; //you can set the value in the input field automatically

    // you can also style the input field, just like you do with vanilla javascript using
    inputRef.current.style.backgroundColor = 'blue';
    inputRef.current.style.padding = '10px';
    paraRef.current.innerText = 'It worked guys';
  };

  // useRef will always give you an object with one property called 'current' knew this by doing console.log(inputRef) inside the onSubmit function, which when you typ an input in the field, and click submit, will log an object in the console. useRef can be an alternative for useState

  //What are the instance to use useRef?
  //1. when you want to dynamatically change a value on the fly when something is clicked
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {/* in this paragraph I used useRef to change the innerHTML and also when it's clicked it focus on the input field*/}
        <p ref={paraRef} onClick={() => inputRef.current.focus()}>
          Hello Guys
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
