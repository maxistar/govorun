import assert from 'assert';
import { Then, When } from '@cucumber/cucumber';

import { Tokenizer } from '../../src/tokenizer';
import type { GovorunWorld } from './world';

When('the greeter says hello', function (this: GovorunWorld) {
  this.whatIHeard = new Tokenizer().sayHello();
});

Then('I should have heard {string}', function (
  this: GovorunWorld,
  expectedResponse: string,
) {
  assert.strictEqual(this.whatIHeard, expectedResponse);
});
