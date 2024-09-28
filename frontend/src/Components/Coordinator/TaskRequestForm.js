import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/Actions/taskAction'; 
import '../../CSS/TaskRequestForm.css'; 

const TaskRequestForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: '',
    description: '',
    skillsRequired: '',
    deadline: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new task object (from form data or API response)
    const newTask = {
      title: task.title,
      description: task.description,
      skillsRequired: task.skillsRequired.split(',').map((skill) => skill.trim()),
      deadline: task.deadline,
    };
    dispatch(addTask(newTask)); // Dispatch the action to add the task
    // Reset form fields
    setTask({
      title: '',
      description: '',
      skillsRequired: '',
      deadline: '',
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Skills Required (comma-separated)"
        value={task.skillsRequired}
        onChange={(e) => setTask({ ...task, skillsRequired: e.target.value })}
      />
      <input
        type="date"
        placeholder="Deadline"
        value={task.deadline}
        onChange={(e) => setTask({ ...task, deadline: e.target.value })}
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskRequestForm;
