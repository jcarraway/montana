import * as React from 'react';

import Layout from '../components/Layout';
import { Project } from '../components/Project';
import { Crew } from '../components/Crew';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Project Montana">
      <Project />
      <Crew />
    </Layout>
  );
};

export default IndexPage;
