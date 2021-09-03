import React from 'react';
import '../App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import AnimeList from './AnimeList';
import QuoteList from './QuoteList';
import Header from './Header';
import store from '../Reducers/store';

const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" component={AnimeList} exact />
            <Route path="/:anime" component={QuoteList} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </>
);

export default App;
