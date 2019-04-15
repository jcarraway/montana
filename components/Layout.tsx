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
      <script
        dangerouslySetInnerHTML={{
          __html: `window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
      heap.load("3073375350");`,
        }}
      />
    </Head>

    <style jsx global>{`
      html,
      body {
        height: 100%;
      }
      body {
        background: ${colors.lightBackground};
        color: ${colors.lightBodyText};
        font-family: 'Work Sans', 'Open Sans', Helvetica, sans-serif;
        max-width: 50em;
        line-height: 1.5;
        margin: 0 auto;
        padding: 1em 6em 0em;
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
      h1 {
        color: ${colors.lightEmphasisColor};
      }
      footer {
        flex: 2;
        height: 60px;
      }
      strong {
        font-weight: 800;
        font-size: 1.1em;
        font-color: ${colors.lightEmphasisColor};
      }
      p {
        text-align: justify;
      }
      li {
        text-align: justify;
      }
      a {
        margin-right: 0;
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
