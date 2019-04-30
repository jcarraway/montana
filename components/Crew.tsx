import React from 'react';
import { BaseballCard } from './BaseballCard';

interface Props {}

export const Crew: React.FC<Props> = () => {
  return (
    <div id="team">
      <h1>Team</h1>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
        @media all and (max-width: 500px) {
          .container {
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>
      <div className="container">
        <BaseballCard
          name="Tayler Kost"
          role="Design, UX, & Strategy"
          favoriteBook="Harry Potter and the Goblet of Fire"
          favoriteMovie="Legends of the Fall"
          superpower="Can turn anything into a narrative"
          weakness="Art museums"
          personalGoal="Write a novel with my grandmother"
          imgName="tk_photo.png"
        />
        <BaseballCard
          name="Rett Carraway"
          role="Technology & Product"
          favoriteBook="Moby Dick"
          favoriteMovie="Rear Window"
          superpower="Googling things"
          weakness="Dark chocolate ice cream with peanut butter"
          personalGoal="Win the Grand Prix of Aachen (the hardest showjumping competition in the world)"
          imgName="rc_photo.png"
        />
      </div>
      <p>
        We’ve been partners in business and life since 2011 when we were
        assigned to the same project in our Advanced Macroeconomics class. We
        live in Brooklyn with our 10-year-old husky.
      </p>
    </div>
  );
};
