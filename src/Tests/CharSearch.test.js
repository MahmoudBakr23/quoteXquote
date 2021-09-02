import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharSearch from '../Components/CharSearch';

describe('Test Anime List Component', () => {
  const anime = render(<CharSearch />);

  test('Testing elements', () => {
    anime.getByText('Hisoka');
    anime.getByText('Meliodas');
    anime.getByText('Erin');
  });
});
