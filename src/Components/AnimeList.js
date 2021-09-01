import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveAnime } from '../Actions/saveAnime';
import { changeSearch } from '../Actions/search';
import Search from './Search';

const AnimeList = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity');
    const myData = await response.json();

    dispatch(saveAnime(myData.top));
  };

  const animes = useSelector((state) => state);

  useEffect(() => {
    getData();
    animes.searchReducer.name = '';
  }, []);

  const handleSearch = (e) => {
    dispatch(changeSearch(e.target.value));
  };

  const animesDisplay = () => {
    if (animes.searchReducer.name === '') {
      return animes.animeReducer;
    }
    return animes.animeReducer.filter((anime) => anime.title === animes.searchReducer.name);
  };

  return (
    <div className="anime-list">
      <Search handleSearch={handleSearch} />
      {animesDisplay().map((anime) => (
        <h3 key={anime.mal_id}><Link to={anime.title}>{anime.title}</Link></h3>
      ))}
    </div>
  );
};

export default AnimeList;
