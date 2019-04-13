import * as React from 'react';
import Head from 'next/head';

import { colors, breakpoints } from '../utils/theme';
import { Nav } from './Nav';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Random Company Name',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Part calendar app, part roadmap, RCN is for people who want to achieve their ultimate potential and live with no regrets."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <style jsx global>{`
      html,
      body {
        height: 100%;
      }
      body {
        background: ${colors.darkBackground};
        color: ${colors.darkBodyText};
        font-family: 'Work Sans', 'Open Sans', Helvetica, sans-serif;
        max-width: 70em;
        line-height: 1.5;
        margin: 0 auto;
        padding: 1em 4em 0em;
        display: flex;
        flex-direction: column;
      }
      // medium screens
      @media all and (max-width: ${breakpoints.medium}) {
        html,
        body {
          padding: 1em 2em 1em;
        }
      }
      // small screens
      @media all and (max-width: ${breakpoints.small}) {
        html,
        body {
          padding: 1em 1em 1em;
        }
      }
      a {
        color: ${colors.brandColor};
        margin-right: 10px;
      }
      footer {
        flex: 2;
      }
    `}</style>
    <Nav />

    <div className="content">{children}</div>
    <style jsx>
      {`
        .content {
          flex: 1 0 auto;
        }
      `}
    </style>
    <footer>
      <hr />
      <span>© 2019 Project Bananas</span>
    </footer>
  </div>
);

export default Layout;
