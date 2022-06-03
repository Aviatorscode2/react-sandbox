import React, { useState, useCallback } from 'react';
// useCallback just like useMemo is used to optimize applications, the difference between the two is that useMemo returns a memoized value, while useCallback returns a Memoized callback function

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  //wrapping the function with useCallback is preventing the button from re rendering since the value passed has not changed
  // adviced to use useCallback and useMemo only when you have expensive function calls.
  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}

// use can use React.meno to memoise a whole component, in situation were you dont want a component to render if the value hasn't change

const Button = React.memo(({ addTask }) => {
  console.log('Button rendered');
  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task Button
      </button>
    </div>
  );
});

export default UseCallbackExample;
