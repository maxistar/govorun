
const MODE_DEFAULT = 0;
const MODE_PUNCTUATION = 1;
const MODE_WHITESPACE = 2;
const MODE_WORD = 3;

class Tokenizer {
    sayHello() {
        return 'hello'
    }

    tokenizeString(input) {
        const length = input.length;
        let mode = MODE_DEFAULT;
        const result = [];
        let currentWord = "";
        let currentChar;
        for (let i = 0; i < length; i++) {
            currentChar = input.substring(i, i + 1);
            if (mode === MODE_WORD) {
                if (this.isLetter(currentChar)) {
                    currentWord += currentChar;
                } else if (this.isPunctuation(currentChar)) {
                    result.push(currentWord.toString());
                    result.push(currentChar);
                    mode = MODE_PUNCTUATION;
                    currentWord = "";
                } else if (this.isWhitespace(currentChar)) {
                    result.push(currentWord.toString());
                    result.push(currentChar);
                    mode = MODE_WHITESPACE;
                    currentWord = "";
                }
            } else if (mode === MODE_PUNCTUATION) {
                if (this.isLetter(currentChar)) {
                    currentWord += currentChar;
                    mode = MODE_WORD;
                } else if (this.isPunctuation(currentChar)) {
                    result.push(currentChar);
                } else if (this.isWhitespace(currentChar)) {
                    result.push(currentChar);
                    mode = MODE_WHITESPACE;
                }
            } else if (mode === MODE_WHITESPACE) {
                if (this.isLetter(currentChar)) {
                    currentWord += currentChar;
                    mode = MODE_WORD;
                } else if (this.isPunctuation(currentChar)) {
                    result.push(currentChar);
                    mode = MODE_PUNCTUATION;
                } else if (this.isWhitespace(currentChar)) {
                    result.push(currentChar);
                }
            } else {
                if (this.isLetter(currentChar)) {
                    currentWord += currentChar;
                    mode = MODE_WORD;
                } else if (this.isPunctuation(currentChar)) {
                    result.push(currentChar);
                    mode = MODE_PUNCTUATION;
                } else if (this.isWhitespace(currentChar)) {
                    result.push(currentChar);
                    mode = MODE_WHITESPACE;
                }
            }
        }
        return result;
    }

    isWhitespace(currentChar) {
        return currentChar === " " || currentChar === "\n";
    }

    isPunctuation(currentChar) {
        return currentChar.match(/[—?,:;.…!«»)(]/gi);
    }

    isLetter(currentChar) {
        return currentChar.match(/[a-zA-Zа-яА-Я\-]/gi);
    }
}

module.exports = {
    Tokenizer
}
