const SAVE_QUOTE = 'SAVE_QUOTE';

const saveQuote = (quote) => ({
  type: SAVE_QUOTE,
  payload: quote,
});

export { SAVE_QUOTE, saveQuote };
