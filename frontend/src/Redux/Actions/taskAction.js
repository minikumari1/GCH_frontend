export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  export const fetchAvailableTasks = (tasks) => {
    return {
      type: 'FETCH_TASKS',
      payload: tasks,
    };
  };
  
  export const acceptTask = (taskId, contributorName) => {
    return {
      type: 'ACCEPT_TASK',
      payload: { taskId, contributorName },
    };
  };
  
  export const uploadResponse = (taskId, response) => {
    return {
      type: 'UPLOAD_RESPONSE',
      payload: { taskId, response },
    };
  };
  
  export const addNotification = (notification) => {
    return {
      type: 'ADD_NOTIFICATION',
      payload: notification,
    };
    // Other action creators (e.g., updateNotifications, removeTask)
  };
  