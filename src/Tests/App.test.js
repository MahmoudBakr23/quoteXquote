import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Reducers/store';
import App from '../Components/App';

describe('Test Anime List Component', () => {
  const anime = render(<App />);

  test('Testing elements', () => {
    anime.getByText('Bleach');
    anime.getByText('Kimetsu no Yaiba');
    anime.getByText('Naruto');
  });

  it('Expect to render App component', () => {
    const result = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON;
    expect(result).toMatchSnapshot();
  });
});
