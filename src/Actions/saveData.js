const SAVE_DATA = 'SAVE_DATA';

const saveData = (data) => ({
  type: SAVE_DATA,
  payload: data,
});

export { SAVE_DATA, saveData };
