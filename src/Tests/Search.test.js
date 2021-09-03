import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Reducers/store';
import Search from '../Components/Search';

describe('Test Anime List Component', () => {
  const anime = render(<Search />);

  test('Testing elements', () => {
    anime.getByText('Bleach');
    anime.getByText('Kimetsu no Yaiba');
    anime.getByText('Naruto');
  });

  it('Expect to render Search component', () => {
    const result = renderer.create(
      <Provider store={store}>
        <Search />
      </Provider>,
    ).toJSON;
    expect(result).toMatchSnapshot();
  });
});
