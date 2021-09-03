import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import QuoteList from '../Components/QuoteList';
import store from '../Reducers/store';

const defaultList = {
  char: 'Naruto',
  image_url: null,
};

it('Should not return an image url', () => {
  const quote = defaultList;
  expect(quote.image_url).not.toEqual('#');
});

it('Should not return a null title', () => {
  const quote = defaultList;
  expect(quote.title).not.toEqual(null);
});

it('Should return an array of quote list', () => {
  const getData = async () => {
    const response = await fetch('https://animechan.vercel.app/api/quotes/anime?title=Bleach');
    const myData = await response.json();
    return myData.top;
  };
  expect(getData()).not.toEqual(null);
});

it('Expect to render Quote List component', () => {
  const result = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <QuoteList />
      </BrowserRouter>
    </Provider>,
  ).toJSON;
  expect(result).toMatchSnapshot();
});
