import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AnimeList from '../Components/AnimeList';
import store from '../Reducers/store';

it('Expect to render Anime List component', () => {
  const result = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <AnimeList />
      </BrowserRouter>
    </Provider>,
  ).toJSON;
  expect(result).toMatchSnapshot();
});
