import React from 'react';
import './App.css';
import AnimeList from './Components/AnimeList';
import QuoteList from './Components/QuoteList';

const App = () => (
  <div className="App">
    <h1>quoteXquote</h1>
    <AnimeList />
    <QuoteList />
  </div>
);

export default App;
