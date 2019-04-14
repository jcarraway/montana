import React from 'react';
import { breakpoints, colors } from '../utils/theme';

interface Props {
  name: string;
  role: string;
  favoriteBook: string;
  favoriteMovie: string;
  superpower: string;
  weakness: string;
  personalGoal: string;
  imgName: string;
}

export const BaseballCard: React.FC<Props> = ({
  name,
  role,
  favoriteBook,
  favoriteMovie,
  superpower,
  weakness,
  personalGoal,
  imgName,
}) => {
  return (
    <div className="container">
      <style jsx>{`
        .card-contents {
          font-size: 0.75em;
          padding-left: 1em;
        }
        .container {
          border: solid 1px ${colors.lightEmphasisColor};
          width: 25vw;
          max-width: 400px;
          padding: 10px;
          display: flex;
          flex-direction: column;
        }
        .card-header {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        @media all and (max-width: ${breakpoints.medium}) {
          .container {
            width: 40vw;
          }
        }
        @media all and (max-width: ${breakpoints.small}) {
          .container {
            width: 80vw;
            margin-bottom: 10px;
          }
        }
      `}</style>
      <div className="card-header">
        <img src={`/static/${imgName}`} height="84" />
        <h2 style={{ marginLeft: 10, marginTop: 0, marginBottom: 0 }}>
          {name}
        </h2>
      </div>
      <div>
        <ul className="card-contents">
          <li>
            <strong>Role:</strong> {role}
          </li>
          <li>
            <strong>Favorite Book:</strong> {favoriteBook}
          </li>
          <li>
            <strong>Favorite Movie:</strong> {favoriteMovie}
          </li>
          <li>
            <strong>Superpower:</strong> {superpower}
          </li>
          <li>
            <strong>Weakness:</strong> {weakness}
          </li>
          <li>
            <strong>Personal Goal:</strong> {personalGoal}
          </li>
        </ul>
      </div>
    </div>
  );
};
