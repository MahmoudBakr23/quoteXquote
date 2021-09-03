import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import QuoteList from '../Components/QuoteList';
import store from '../Reducers/store';

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
