import * as React from 'react';
import Layout from '../components/Layout';
import { BaseballCard } from '../components/BaseballCard';
import { Header } from '../components/Header';
import { HowItWorks } from '../components/HowItWorks';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Project Bananas">
      <Header />
      <HowItWorks />
      <div>
        <h2>The Players</h2>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          }
          @media all and (max-width: 500px) {
            .container {
              flex-direction: column;
              justify-content: center;
            }
          }
        `}</style>
        <div className="container">
          <BaseballCard
            name="Tayler Kost"
            strenghts={['tall']}
            weaknesses={['none']}
          />
          <BaseballCard
            name="Rett Carraway"
            strenghts={['marbles']}
            weaknesses={['cry baby']}
          />
        </div>
      </div>
      <div>
        <h2>Progress Reports</h2>
        <div>
          <p>Week 0: Global Rank: 45</p>
        </div>
        <p>Week 1: Global Rank: ?</p>
        <p>Week 2: Global Rank: ?</p>
        <p>Week 3: Global Rank: ?</p>
      </div>
      <div>
        <h2>Inspired By</h2>
        <p>Ray Dalio, Tim Urban, etc.</p>
      </div>
      <p />
    </Layout>
  );
};

export default IndexPage;
