import { useState, useRef, useEffect } from 'react';

// used to explain how to handle memory leak in with useRef in Exmaple 3
function Todo() {
  const [loading, setLoading] = useState(true);

  const [todo, setTodo] = useState('');

  const isMounted = useRef(true);

  // this is serving as a makeshift backend which will be unmounted affect 3seconds
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });

    // this return will run when the component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return loading ? <h3>Loading..</h3> : <h1>{todo.title}</h1>;
}

export default Todo;
