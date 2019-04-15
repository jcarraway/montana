import * as React from 'react';

import Layout from '../components/Layout';
import { Project } from '../components/Project';
import { Updates } from '../components/Updates';
import { Team } from '../components/Team';
import { Feedback } from '../components/Feedback';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Project Aji">
      <Project />
      <Updates />
      <Team />
      <Feedback />
    </Layout>
  );
};

export default IndexPage;
