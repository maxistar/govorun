import { expect, test } from '@jest/globals';

import { Tokenizer } from '../src/tokenizer';
import inputString from './_testdata/nekrasov';
import expectedTokens from './_testdata/nekrasov.tokenized';

test('compare expected result', () => {
  const tokenizer = new Tokenizer();
  const actualTokens = tokenizer.tokenizeString(inputString);

  expect(actualTokens).toEqual(expectedTokens);
});
