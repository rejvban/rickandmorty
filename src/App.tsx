import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout } from './components/Layout';

const QUERY = gql`
  query {
    characters(page: 2, filter: { name: "Rick" }) {
      results {
        name
      }
    }
  }
`;

const App: React.FC = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Layout>
      <h1>Shit</h1>
      {console.log(data)}
    </Layout>
  );
};

export default App;
