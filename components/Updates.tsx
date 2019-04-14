import React from 'react';
import { UpdateWeekOne } from './UpdateWeekOne';

interface Props {}

export const Updates: React.FC<Props> = () => {
  return (
    <div id="updates">
      <h1>Updates</h1>
      <UpdateWeekOne />
    </div>
  );
};
