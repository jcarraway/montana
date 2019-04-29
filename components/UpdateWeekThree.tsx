import React from 'react';

interface Props {}

export const UpdateWeekThree: React.FC<Props> = () => {
  return (
    <div>
      <h2>Week Three</h2>
      <p>
        <strong>What we are building: </strong>Strava for life management - an
        app that makes self-improvement easier and more collaborative.
      </p>
      <p>
        <strong>What we accomplished this week: </strong>This week we:
        <ul>
          <li>Trashed the plan we submitted 🙃</li>
          <li>
            Refactored the day planner backend to support the iCalendar RFC (RFC
            5543)
          </li>
          <li>
            Refactored the real-time messaging backend to improve performance &
            fault tolerance
          </li>
          <li>Built full paper prototype</li>
        </ul>
      </p>
      <p>
        <strong>What we plan to accomplish next week: </strong>
        Design and build a few UI prototypes for web and mobile to try to answer
        the question: "Can a day planner app help you feel more excited about
        your day?"
      </p>
    </div>
  );
};
