import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../Components/App';

describe('Test Anime List Component', () => {
  const anime = render(<App />);

  test('Testing elements', () => {
    anime.getByText('Bleach');
    anime.getByText('Kimetsu no Yaiba');
    anime.getByText('Naruto');
  });
});
