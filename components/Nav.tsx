import React from 'react'
import Link from 'next/link';

interface Props {

}

export const Nav: React.FC<Props> = () => {
    return (
      <nav style={{ height: 40, verticalAlign: 'middle' }}>
      <Link href="/about">
        <a style={{ float: 'right' }}>About</a>
      </Link>
      <Link href="/">
        <a style={{ float: 'right' }}>Home</a>
      </Link>
    </nav>);
}