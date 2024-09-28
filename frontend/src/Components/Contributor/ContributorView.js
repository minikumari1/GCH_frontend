import React from 'react';
import AvailableTasks from './AvailableTasks';
import TaskDetails from './TaskDetails';
import UploadResponseForm from './UploadResponseForm';

const ContributorView = () => {
  return (
    <div>
      <h1>Contributor View</h1>
      <AvailableTasks />
      <TaskDetails />
      <UploadResponseForm />
    </div>
  );
};

export default ContributorView;
