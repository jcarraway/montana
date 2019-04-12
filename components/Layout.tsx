import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Project Bananas',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>© 2019 Project Bananas</span>
    </footer>
  </div>
);

export default Layout;