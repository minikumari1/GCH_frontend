import React from 'react';
import TaskRequestForm from './TaskRequestForm';
import TaskList from './TaskList';
import Responses from './Response';

const CoordinatorView = () => {
  return (
    <div>
      <h1>Coordinator View</h1>
      <TaskRequestForm />
      <TaskList />
      {/* <Responses /> */}
    </div>
  );
};

export default CoordinatorView;
