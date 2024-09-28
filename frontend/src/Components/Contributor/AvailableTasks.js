import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAvailableTasks, acceptTask } from '../../Redux/Actions/taskAction'; 

const AvailableTasks = () => {
  const availableTasks = useSelector((state) => state.availableTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvailableTasks()); // Fetch available tasks from the backend
  }, [dispatch]);

  const handleAcceptTask = (taskId) => {
    dispatch(acceptTask(taskId)); // Dispatch the action to accept the task
  };

  return (
    <ul>
      {availableTasks.map((task) => (
        <li key={task._id}>
          {task.title} <button onClick={() => handleAcceptTask(task._id)}>Accept</button>
        </li>
      ))}
    </ul>
  );
};

export default AvailableTasks;
