import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAvailableTasks } from '../../Redux/Actions/taskAction';
import '../../CSS/TaskList.css';


const dummyTaskList = [
    {
        "_id": "1",
        "title": "Design Landing Page",
        "description": "Create a visually appealing landing page for the website.",
        "skillsRequired": ["UI/UX", "Web Design"],
        "deadline": "December 15, 2023"
    },
    {
        "_id": "2",
        "title": "Write Blog Post",
        "description": "Write a blog post about the latest industry trends.",
        "skillsRequired": ["Content Writing", "Research"],
        "deadline": "December 20, 2023"
    },
    {
        "_id": "3",
        "title": "Develop API",
        "description": "Build a RESTful API for the mobile app.",
        "skillsRequired": ["Backend Development", "API Design"],
        "deadline": "December 10, 2023"
    }
]


const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAvailableTasks());
    }, [dispatch]);

    return (
        <div className="task-list">
            <h2>Available Tasks</h2>
            <ul>
                {dummyTaskList.map((task) => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
