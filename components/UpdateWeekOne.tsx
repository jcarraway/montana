import React from 'react';

interface Props {}

export const UpdateWeekOne: React.FC<Props> = () => {
  return (
    <div>
      <h3>Week One</h3>
      <p>
        <strong>What we are building:</strong>
      </p>
      <p>
        <strong>What we accomplished this week:</strong>
      </p>
      <p>
        <strong>What we plan to accomplish next week:</strong>
      </p>
    </div>
  );
};
