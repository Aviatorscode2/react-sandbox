import { useState } from 'react';
import Todo from './Todo';

// In this example, i will be working with the Todo.jsx component to simulate an instance of memory leak and try to fix it using useRef
// Memory leak occurs when you're fetching data from a backend and the component unmounted before the response comes back. Memory leak affects performance of your application by using the amount of avialable memory
function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  );
}

export default UseRefExample3;
