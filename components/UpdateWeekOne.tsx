import React from 'react';

interface Props {}

export const UpdateWeekOne: React.FC<Props> = () => {
  return (
    <div>
      <h2>Week One</h2>
      <p>
        <strong>What we are building: </strong>A day planner app that uses
        gamification to translate your long-term goals into manageable,
        short-term to-dos.
      </p>
      <p>
        <strong>What we accomplished this week: </strong>We accomplished more
        than we planned. We stood up a basic working prototype of the core
        features of app for web, iPhone, and Android. We also built a project
        website to share updates, track our progress, and gather feedback.
      </p>
      <p>
        <strong>What we plan to accomplish next week: </strong>
        We want to build 4 more components of the app - the onboarding flow,
        user principles, user goals, and the goal road mapping tool on all 3
        platforms. We are focusing on function over form, but want to end the
        week with the UI somewhat polished.
      </p>
    </div>
  );
};
