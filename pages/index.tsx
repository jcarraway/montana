import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Project Bananas">
      <h1>Hello, Pioneers!</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
