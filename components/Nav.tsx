import React from 'react';
import Link from 'next/link';

interface Props {}

export const Nav: React.FC<Props> = () => {
  return (
    <nav style={{ height: 40, verticalAlign: 'middle' }}>
      <style jsx>{`
        .navlinks {
          float: right;
          margin-left: 5px;
        }
      `}</style>
      <Link href="#feedback">
        <a className="navlinks">Feedback</a>
      </Link>
      <Link href="#team">
        <a className="navlinks">Team</a>
      </Link>
      <Link href="#updates">
        <a className="navlinks">Updates</a>
      </Link>{' '}
      <Link href="#project">
        <a className="navlinks">Project</a>
      </Link>
    </nav>
  );
};
