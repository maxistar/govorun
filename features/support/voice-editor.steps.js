const {When, Then} = require("@cucumber/cucumber");
const {Tokenizer} = require("../../src/tokenizer");
const {VoiceEditor} = require("../../src/voice-editor");
const assert = require("assert");
const expectedTokens = require("../../tests/_testdata/nekrasov.tokenized");


When('TextEditor gets standard text', function () {
    this.voiceEditor = new VoiceEditor();
    this.voiceEditor.setTokens(expectedTokens)
});

When('TextEditor calls {string}', function (calledMethod) {
    this.voiceEditor[calledMethod]();
});

When('TextEditor calls {string} with {string}', function (calledMethod, parameter) {
    this.voiceEditor[calledMethod](parameter);
});


Then('It should return last element {string}', function (expectedWord) {
    assert.deepEqual(this.voiceEditor.getLatestToken(), expectedWord)
});

Then('It should return last word {string}', function (expectedWord) {
    assert.deepEqual(this.voiceEditor.getLatestToken(), expectedWord)
});
