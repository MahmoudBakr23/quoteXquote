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
      <div className="suggestions">
        <Link to="Naruto"><img alt="Naruto" src="https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6" /></Link>
        <Link to="Hunter x Hunter (2011)"><img alt="Naruto" src="https://cdn.myanimelist.net/images/anime/11/33657.jpg?s=5724d8c22ae7a1dad72d8f4229ef803f" /></Link>
        <Link to="Shingeki no Kyojin"><img alt="Naruto" src="https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98" /></Link>
        <Link to="One Piece"><img alt="Naruto" src="https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14" /></Link>
        <Link to="Nanatsu no Taizai"><img alt="Naruto" src="https://cdn.myanimelist.net/images/anime/8/65409.jpg?s=9045a2ed86abe77a6b24f0ad7f114485" /></Link>
      </div>
      <Search handleSearch={handleSearch} />
      {animesDisplay().map((anime) => (
        <div className="anime-details" key={anime.mal_id}>
          <Link to={anime.title}><img alt={anime.title} src={anime.image_url} /></Link>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
