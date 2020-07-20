import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useQuery, gql } from '@apollo/client';
// import { Layout } from './components/Layout';
import { Home } from './pages/Home';

// const QUERY = gql`
//   query {
//     characters(page: 2, filter: { name: "Rick" }) {
//       results {
//         name
//       }
//     }
//   }
// `;

const App: React.FC = () => {
  // const { loading, error, data } = useQuery(QUERY);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
