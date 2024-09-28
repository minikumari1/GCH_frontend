import React from 'react';
import { useSelector } from 'react-redux';

const TaskDetails = ({ taskId }) => {
    const task = useSelector((state) => state.tasks.find((t) => t._id === taskId));
    const handleAcceptTask = () => {

    }
    return (
        <div>
            <h2>{task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Deadline: {task.deadline}</p>
            <button onClick={() => handleAcceptTask(task._id)}>Accept Task</button>
        </div>
    );
};

export default TaskDetails;
