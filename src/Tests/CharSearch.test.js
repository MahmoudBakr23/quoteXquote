import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Reducers/store';
import CharSearch from '../Components/CharSearch';

describe('Test Anime List Component', () => {
  const anime = render(<CharSearch />);

  test('Testing elements', () => {
    anime.getByText('Hisoka');
    anime.getByText('Meliodas');
    anime.getByText('Erin');
  });

  it('Expect to render Character Search component', () => {
    const result = renderer.create(
      <Provider store={store}>
        <CharSearch />
      </Provider>,
    ).toJSON;
    expect(result).toMatchSnapshot();
  });
});
