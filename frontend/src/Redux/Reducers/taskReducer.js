const initialState = {
    tasks: [],
    responses: [],
    notifications: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'FETCH_TASKS':
        return { ...state, tasks: action.payload };
      case 'ACCEPT_TASK':
        // Update the assigned contributor for the accepted task
        const updatedTasks = state.tasks.map((task) =>
          task._id === action.payload.taskId
            ? { ...task, assignedContributor: action.payload.contributorName }
            : task
        );
        return { ...state, tasks: updatedTasks };
      case 'UPLOAD_RESPONSE':
        // Update the responses for the task
        const updatedResponses = state.responses.concat(action.payload);
        return { ...state, responses: updatedResponses };
      case 'ADD_NOTIFICATION':
        return { ...state, notifications: [...state.notifications, action.payload] };
      // Other cases for different actions (e.g., updateNotifications, removeTask)
      default:
        return state;
    }
  };
  
  export default taskReducer;
  