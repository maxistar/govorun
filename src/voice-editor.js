const {Tokenizer} = require("./tokenizer");

class VoiceEditor {
    tokens = [];

    position = -1;

    constructor() {
        this.tokenizer = new Tokenizer();
    }

    setText(text) {
        this.tokens = this.tokenizer.tokenizeString(text);
    }

    setTokens(tokens) {
        this.tokens = tokens;
        this.position = tokens.length - 1;

    }

    getLatestToken() {
        return this.tokens[this.position];
    }

    moveWordBackward() {
        this.moveBackwardUntilWord();
        this.moveElementBackward();
        this.moveBackwardUntilWord();
    }

    moveBackwardUntilWord() {
        //if the current position is not works move backward until it is workd
        while (this.isNotStart() && !this.isCurrentPositionWord()) {
            this.moveElementBackward();
        }
    }

    moveForwardUntilWord() {
        //if the current position is not works move backward until it is workd
        while (this.isNotEnd() && !this.isCurrentPositionWord()) {
            this.moveElementForward();
        }
    }

    moveElementBackward() {
        this.position--;
    }

    moveElementForward() {
        this.position++;
    }

    moveWordForward() {
        this.moveForwardUntilWord()
        this.moveElementForward();
        this.moveForwardUntilWord();
    }

    replaceCurrentWord(newWord) {
        this.moveBackwardUntilWord();
        this.tokens[this.position] = newWord;
    }

    insertPhrase() {

    }

    isNotStart() {
        return this.position > 0;
    }

    isWhitespace(currentChar) {
        return currentChar === " " || currentChar === "\n";
    }

    isPunctuation(currentChar) {
        return currentChar.match(/[—?,:;.…!«»)(]/gi);
    }

    isCurrentPositionWord() {
        const currentElement = this.getLatestToken();
        return !(this.isPunctuation(currentElement) || this.isWhitespace(currentElement));
    }

    isNotEnd() {
        return this.position < this.tokens.length;
    }
}

module.exports = {
    VoiceEditor
}
