import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '../Components/Search';

describe('Test Anime List Component', () => {
  const anime = render(<Search />);

  test('Testing elements', () => {
    anime.getByText('Bleach');
    anime.getByText('Kimetsu no Yaiba');
    anime.getByText('Naruto');
  });
});
