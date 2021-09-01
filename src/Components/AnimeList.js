import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveAnime } from '../Actions/saveAnime';

const AnimeList = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity');
    const myData = await response.json();

    dispatch(saveAnime(myData.top));
  };

  useEffect(() => {
    getData();
  }, []);

  const animes = useSelector((state) => state);

  return (
    <div className="anime-list">
      <Link to="/quotes">Quotes</Link>
      {animes.animeReducer.map((anime) => <h3 key={anime.mal_id}>{anime.title}</h3>)}
    </div>
  );
};

export default AnimeList;
