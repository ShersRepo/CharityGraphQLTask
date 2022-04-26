import './App.css';
import env from './environment.json';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Header from './components/header';
import CharityList from './components/charity-list';
import CharityTable from './components/charity-table';
import CharityView from './components/charity-view';


const client = new ApolloClient({ 
  
  uri: env.charitybase.uri, 
  cache: new InMemoryCache(), 
  headers: {
    Authorization: env.charitybase.apikey
  }, 
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/charities">
            <CharityList />
          </Route>

          <Route exact path="/home">
            <CharityList />
          </Route>

          <Route exact path="/charitytable">
            <CharityTable />
          </Route>

          <Route exact path="/charityview/:id">
            <CharityView />
          </Route>

          <Route path="/">
            <CharityList />
          </Route>

          <Route path="*">
            <CharityList />
          </Route>

        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App;
