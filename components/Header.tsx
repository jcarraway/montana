import React from 'react';
import { colors } from '../utils/theme';

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header>
      <style jsx>{`
        header {
          min-height: 350px;
        }
        .lede {
          font-size: 1.25em;
          max-width: 660px;
        }
        .opener {
          color: ${colors.darkEmphasisColor};
        }
      `}</style>
      <h1 className="opener">Get where you want to go</h1>
      <p className="lede">
        Part calendar app, part roadmap, RCN is for people who want to achieve
        their ultimate potential and live with no regrets. <br /> You get
        perspective, focus, and results.
      </p>
    </header>
  );
};
