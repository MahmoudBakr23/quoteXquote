const SAVE_ANIME = 'SAVE_ANIME';

const saveAnime = (anime) => ({
  type: SAVE_ANIME,
  payload: anime,
});

export { SAVE_ANIME, saveAnime };
