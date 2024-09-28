import React from 'react';
import { useSelector } from 'react-redux';

const Responses = () => {
  const responses = useSelector((state) => state.responses);

  return (
    <div>
      {responses.map((response) => (
        <div key={response._id}>
          <p>Contributor: {response.contributorName}</p>
          {/* Display uploaded files */}
        </div>
      ))}
    </div>
  );
};

export default Responses;
