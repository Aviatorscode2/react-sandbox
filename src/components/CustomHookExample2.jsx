import useLocalStorage from '../hooks/useLocalStorage';

// This is a custom hook to take advantage of local storage
function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObject = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObject]);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((task) => (
        <h2 key={task.date}>{task.task}</h2>
      ))}
    </>
  );
}

export default CustomHookExample2;
