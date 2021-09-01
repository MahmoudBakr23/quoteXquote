/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveQuote } from '../Actions/saveQuote';
import { changeChar } from '../Actions/search';
import Search from './Search';

const QuoteList = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${params.anime}`);
    const myData = await response.json();

    dispatch(saveQuote(myData));
  };

  const animes = useSelector((state) => state);

  useEffect(() => {
    getData();
    animes.searchReducer.name = '';
  }, []);

  const handleSearch = (e) => {
    dispatch(changeChar(e.target.value));
  };

  const quotesDisplay = () => {
    if (animes.searchReducer.name === '') {
      return animes.quoteReducer;
    }
    return animes.quoteReducer.filter((quote) => quote.character === animes.searchReducer.name);
  };

  return (
    <div className="anime-list">
      <Search handleSearch={handleSearch} />
      <h3>{params.anime}</h3>
      {quotesDisplay().map((quote, index) => (
        <div key={index}>
          <h5>{quote.character}</h5>
          <h4>{quote.quote}</h4>
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
