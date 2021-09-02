import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnimeList from './Components/AnimeList';
import QuoteList from './Components/QuoteList';
import Header from './Components/Header';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={AnimeList} exact />
        <Route path="/:anime" component={QuoteList} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
