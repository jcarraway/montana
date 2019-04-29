import React from 'react';
import { UpdateWeekOne } from './UpdateWeekOne';
import { UpdateWeekTwo } from './UpdateWeekTwo';
import { UpdateWeekThree } from './UpdateWeekThree';

interface Props {}

export const Updates: React.FC<Props> = () => {
  return (
    <div id="updates">
      <h1>Updates</h1>
      <UpdateWeekOne />
      <UpdateWeekTwo />
      <UpdateWeekThree />
    </div>
  );
};
