import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadResponse } from '../../Redux/Actions/taskAction'; // Example action creator

const UploadResponseForm = ({ taskId }) => {
  const dispatch = useDispatch();
  const [responseFile, setResponseFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResponseFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadResponse(taskId, responseFile)); // Dispatch the action to upload the response
    setResponseFile(null); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload Response</button>
    </form>
  );
};

export default UploadResponseForm;
