const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { Tokenizer } = require('../../src/tokenizer')

When('the greeter says hello', function () {
  this.whatIHeard = new Tokenizer().sayHello()
});

Then('I should have heard {string}', function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse)
});
