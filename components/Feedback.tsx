import React from 'react';

interface Props {}

export const Feedback: React.FC<Props> = () => {
  return (
    <div id="feedback">
      <h1>Feedback</h1>
      <p>
        We 💖 feedback. Love the project and have some suggestions? We’d love to
        hear! Hate the project and hope we stop - we’ll take that too. Feedback
        is a gift, and we thank you.
      </p>
      <div>
        Some questions we would love to hear your answers to:
        <ul>
          <li>How do you think about and plan for your long-term goals?</li>
          <li>
            How do your values and principles affect your goals and how you plan
            to achieve them?
          </li>
          <li>
            What is your process for determining whether or not you are on
            track?
          </li>
          <li>
            What is the one habit or principle that has contributed most to your
            success and how?
          </li>
          <li>
            How do you review your progress towards your goals? Your actions'
            alignment with your principles? How you spend your time?
          </li>
          <li>How would you describe our project to your friends?</li>
          <li>
            Do you already have a life system? If so, what is it? How has it
            changed your perspective? Your results?
          </li>
        </ul>
      </div>
      <p>
        <a href="mailto:rett@gmx.com?Subject=Project%20Aji%20Feedback">
          Send us an email
        </a>{' '}
        📧
      </p>
    </div>
  );
};
