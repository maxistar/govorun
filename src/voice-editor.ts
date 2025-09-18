import { Tokenizer } from './tokenizer';

export class VoiceEditor {
  private readonly tokenizer: Tokenizer;

  private tokens: string[] = [];

  private position = -1;

  public constructor(tokenizer: Tokenizer = new Tokenizer()) {
    this.tokenizer = tokenizer;
  }

  public setText(text: string): void {
    this.tokens = this.tokenizer.tokenizeString(text);
    this.position = this.tokens.length - 1;
  }

  public setTokens(tokens: string[]): void {
    this.tokens = tokens;
    this.position = tokens.length - 1;
  }

  public getLatestToken(): string | undefined {
    return this.tokens[this.position];
  }

  public moveWordBackward(): void {
    this.moveBackwardUntilWord();
    this.moveElementBackward();
    this.moveBackwardUntilWord();
  }

  public moveWordForward(): void {
    this.moveForwardUntilWord();
    this.moveElementForward();
    this.moveForwardUntilWord();
  }

  public moveElementBackward(): void {
    this.position -= 1;
  }

  public moveElementForward(): void {
    this.position += 1;
  }

  public replaceCurrentWord(newWord: string): void {
    this.moveBackwardUntilWord();
    if (this.position >= 0 && this.position < this.tokens.length) {
      this.tokens[this.position] = newWord;
    }
  }

  public insertPhrase(): void {
    // Not implemented yet
  }

  private moveBackwardUntilWord(): void {
    while (this.isNotStart() && !this.isCurrentPositionWord()) {
      this.moveElementBackward();
    }
  }

  private moveForwardUntilWord(): void {
    while (this.isNotEnd() && !this.isCurrentPositionWord()) {
      this.moveElementForward();
    }
  }

  private isNotStart(): boolean {
    return this.position > 0;
  }

  private isNotEnd(): boolean {
    return this.position < this.tokens.length;
  }

  private isCurrentPositionWord(): boolean {
    const currentElement = this.getLatestToken();
    if (typeof currentElement !== 'string') {
      return false;
    }

    return !(
      this.isPunctuation(currentElement) || this.isWhitespace(currentElement)
    );
  }

  private isWhitespace(value: string | undefined): boolean {
    return value === ' ' || value === '\n';
  }

  private isPunctuation(value: string | undefined): boolean {
    if (typeof value !== 'string') {
      return false;
    }

    return /[—?,:;.…!«»)(]/u.test(value);
  }
}
