import React from 'react';
import { BaseballCard } from './BaseballCard';

interface Props {}

export const Team: React.FC<Props> = () => {
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
          favoriteMovie="Legends of the Fall (don’t @ me)"
          superpower="Can turn anything into a narrative with only her mind"
          weakness="Art museums & estate sales"
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
        <a href="https://www.linkedin.com/in/tayler-kost">Tayler</a> &{' '}
        <a href="https://www.linkedin.com/in/rett-carraway-29230531/">Rett</a>{' '}
        have been partners, in both business and life, since 2011 when they were
        assigned to the same project in their Advanced Macroeconomics class.
        Hailing from the south, they currently reside in Brooklyn with their 10
        year-old husky.{' '}
      </p>
    </div>
  );
};
