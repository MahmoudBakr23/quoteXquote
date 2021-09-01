import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveData } from './Actions/saveData';

const App = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch('https://api.jikan.moe/v3/top/anime/2/bypopularity');
    const myData = await response.json();

    dispatch(saveData(myData.top));
  };

  useEffect(() => {
    getData();
  }, []);

  const animes = useSelector((state) => state);

  return (
    <div className="App">
      <h1>quoteXquote</h1>
      {animes.map((anime) => <h3 key={anime.mal_id}>{anime.title}</h3>)}
    </div>
  );
};

export default App;
