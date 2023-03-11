const {When, Then} = require("@cucumber/cucumber");
const {Tokenizer} = require("../../src/tokenizer");
const {VoiceEditor} = require("../../src/voice-editor");
const assert = require("assert");
const expectedTokens = require("../../tests/_testdata/nekrasov.tokenized");


When('TextEditor gets standard text', function () {
    this.voiceEditor = new VoiceEditor();
    this.voiceEditor.setTokens(expectedTokens)
});

Then('It should return last word {string}', function (expectedWord) {
    assert.deepEqual(this.voiceEditor.getLatestToken(), expectedWord)
});
