import React, { useState } from 'react';
import './ToDo.css';
function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, isCompleted: false }]);
      setNewTask('');
    }
  };

  const completeTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => completeTask(index)}>{task.isCompleted ? 'Undo' : 'Complete'}</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
