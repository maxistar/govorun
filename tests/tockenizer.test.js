const { Tokenizer } = require('../src/tokenizer');
const inputString = require('./_testdata/nekrasov');
const expectedTokens = require('./_testdata/nekrasov.tokenized');

test('compare expected result', () => {
  const tokenizer = new Tokenizer();
  const actualTokens = tokenizer.tokenizeString(inputString);

  expect(actualTokens).toEqual(expectedTokens);
});
