import React from 'react';

interface Props {}

export const UpdateWeekTwo: React.FC<Props> = () => {
  return (
    <div>
      <h2>Week Two</h2>
      <p>
        <strong>What we are building: </strong>We are building a day planner app
        that helps you make sure you are on the right track to get everything
        you want out of life.
      </p>
      <p>
        <strong>What we accomplished this week: </strong>We built all 4 planned
        components and completed the first round of internal testing. We
        finished the real-time messaging backend, which is being used in the
        social aspect of the app. Finally, we designed the architecture for the
        next phase of the product.
      </p>
      <p>
        <strong>What we plan to accomplish next week: </strong>
        We are planning to build some new components we created as a result of
        testing - a WYSIWYG display for the routine builder, updated calendar
        day view, and nested checklists.
      </p>
    </div>
  );
};
