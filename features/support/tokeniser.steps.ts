import assert from 'assert';
import { Then, When } from '@cucumber/cucumber';

import { Tokenizer } from '../../src/tokenizer';
import inputString from '../../tests/_testdata/nekrasov';
import expectedTokens from '../../tests/_testdata/nekrasov.tokenized';
import type { GovorunWorld } from './world';

When('Tokenizer has example text as input', function (this: GovorunWorld) {
  this.tokens = new Tokenizer().tokenizeString(inputString);
});

Then('It should return expected result', function (this: GovorunWorld) {
  assert.deepStrictEqual(this.tokens, expectedTokens);
});
