const {When, Then} = require("@cucumber/cucumber");
const {Tokenizer} = require("../../src/tokenizer");
const inputString = require("../../tests/_testdata/nekrasov");
const assert = require("assert");
const expectedTokens = require("../../tests/_testdata/nekrasov.tokenized");


When('Tokenizer has example text as input', function () {
    this.tokens = (new Tokenizer()).tokenizeString(inputString)
});

Then('It should return expected result', function () {
    assert.deepEqual(this.tokens, expectedTokens)
});
