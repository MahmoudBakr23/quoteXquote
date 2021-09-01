import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveQuote } from '../Actions/saveQuote';

const QuoteList = () => {
  const animes = useSelector((state) => state);
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch('https://animechan.vercel.app/api/quotes/anime?title=naruto');
    const myData = await response.json();

    dispatch(saveQuote(myData));
    console.log(myData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="anime-list">
      {animes.quoteReducer.map((quote) => <h3 key={quote.anime}>{quote.quote}</h3>)}
    </div>
  );
};

export default QuoteList;
