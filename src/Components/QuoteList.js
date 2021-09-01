/* eslint-disable react/no-array-index-key */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveQuote } from '../Actions/saveQuote';

const QuoteList = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${params.anime}`);
    const myData = await response.json();

    dispatch(saveQuote(myData));
  };

  useEffect(() => {
    getData();
  }, []);

  const animes = useSelector((state) => state);

  return (
    <div className="anime-list">
      <h3>{params.anime}</h3>
      {animes.quoteReducer.map((quote, index) => <h3 key={index}>{quote.quote}</h3>)}
    </div>
  );
};

export default QuoteList;
