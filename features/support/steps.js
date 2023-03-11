const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { Tokenizer } = require('../../src/tokenizer')
const inputString = require('../../tests/_testdata/nekrasov');
const expectedTokens = require('../../tests/_testdata/nekrasov.tokenized');

When('the greeter says hello', function () {
  this.whatIHeard = new Tokenizer().sayHello()
});

Then('I should have heard {string}', function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse)
});

When('Tokenizer has example text as input', function () {
  this.tokens = (new Tokenizer()).tokenizeString(inputString)
});

Then('It should return expected result', function () {
  assert.deepEqual(this.tokens, expectedTokens)
});
