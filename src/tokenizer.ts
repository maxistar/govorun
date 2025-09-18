const enum TokenizerMode {
  Default,
  Punctuation,
  Whitespace,
  Word,
}

export class Tokenizer {
  public sayHello(): string {
    return 'hello';
  }

  public tokenizeString(input: string): string[] {
    const length = input.length;
    let mode: TokenizerMode = TokenizerMode.Default;
    const result: string[] = [];
    let currentWord = '';

    for (let i = 0; i < length; i += 1) {
      const currentChar = input.substring(i, i + 1);
      if (mode === TokenizerMode.Word) {
        if (this.isLetter(currentChar)) {
          currentWord += currentChar;
        } else {
          if (currentWord.length > 0) {
            result.push(currentWord);
            currentWord = '';
          }

          if (this.isPunctuation(currentChar)) {
            result.push(currentChar);
            mode = TokenizerMode.Punctuation;
          } else if (this.isWhitespace(currentChar)) {
            result.push(currentChar);
            mode = TokenizerMode.Whitespace;
          } else {
            mode = TokenizerMode.Default;
          }
        }
      } else if (mode === TokenizerMode.Punctuation) {
        if (this.isLetter(currentChar)) {
          currentWord += currentChar;
          mode = TokenizerMode.Word;
        } else if (this.isPunctuation(currentChar)) {
          result.push(currentChar);
        } else if (this.isWhitespace(currentChar)) {
          result.push(currentChar);
          mode = TokenizerMode.Whitespace;
        } else {
          mode = TokenizerMode.Default;
        }
      } else if (mode === TokenizerMode.Whitespace) {
        if (this.isLetter(currentChar)) {
          currentWord += currentChar;
          mode = TokenizerMode.Word;
        } else if (this.isPunctuation(currentChar)) {
          result.push(currentChar);
          mode = TokenizerMode.Punctuation;
        } else if (this.isWhitespace(currentChar)) {
          result.push(currentChar);
        } else {
          mode = TokenizerMode.Default;
        }
      } else {
        if (this.isLetter(currentChar)) {
          currentWord += currentChar;
          mode = TokenizerMode.Word;
        } else if (this.isPunctuation(currentChar)) {
          result.push(currentChar);
          mode = TokenizerMode.Punctuation;
        } else if (this.isWhitespace(currentChar)) {
          result.push(currentChar);
          mode = TokenizerMode.Whitespace;
        }
      }
    }

    if (mode === TokenizerMode.Word && currentWord.length > 0) {
      result.push(currentWord);
    }

    return result;
  }

  private isWhitespace(char: string): boolean {
    return char === ' ' || char === '\n';
  }

  private isPunctuation(char: string): boolean {
    return /[—?,:;.…!«»)(]/u.test(char);
  }

  private isLetter(char: string): boolean {
    return /[a-zA-Zа-яА-Я-]/u.test(char);
  }
}
