import React from 'react';
import Link from 'next/link';

interface Props {}

export const Nav: React.FC<Props> = () => {
  return (
    <nav style={{ height: 40, verticalAlign: 'middle' }}>
      <Link href="#feedback">
        <a style={{ float: 'right' }}>Feedback</a>
      </Link>
      <Link href="#team">
        <a style={{ float: 'right' }}>Team</a>
      </Link>
      <Link href="#updates">
        <a style={{ float: 'right' }}>Updates</a>
      </Link>
      <Link href="#project">
        <a style={{ float: 'right' }}>Project</a>
      </Link>
    </nav>
  );
};
