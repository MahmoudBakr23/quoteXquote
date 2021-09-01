import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnimeList from './Components/AnimeList';
import QuoteList from './Components/QuoteList';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <h1>quoteXquote</h1>
      <Switch>
        <Route path="/" component={AnimeList} exact />
        <Route path="/:anime" component={QuoteList} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
