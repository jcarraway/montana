import React from 'react';
import { breakpoints } from '../utils/theme';

interface Props {
  name: string;
  strenghts: string[];
  weaknesses: string[];
}

export const BaseballCard: React.FC<Props> = ({
  name,
  strenghts,
  weaknesses,
}) => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          border: solid 1px #fff;
          width: 25vw;
          max-width: 400px;
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
      <h3>{name}</h3>
      <div>
        <h5>Strengths</h5>

        <ul>
          {strenghts.map(s => {
            return <li key={`strength-${s}`}>{s}</li>;
          })}
        </ul>
      </div>

      <div>
        <h5>Weaknesses</h5>

        <ul>
          {weaknesses.map(w => {
            return <li key={`weakness-${w}`}>{w}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
