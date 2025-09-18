import assert from 'assert';
import { Then, When } from '@cucumber/cucumber';

import expectedTokens from '../../tests/_testdata/nekrasov.tokenized';
import { VoiceEditor } from '../../src/voice-editor';
import type { GovorunWorld } from './world';

type VoiceEditorAction =
  | 'moveElementBackward'
  | 'moveElementForward'
  | 'moveWordBackward'
  | 'moveWordForward';

type VoiceEditorActionWithParameter = 'replaceCurrentWord';

When('TextEditor gets standard text', function (this: GovorunWorld) {
  this.voiceEditor = new VoiceEditor();
  this.voiceEditor.setTokens([...expectedTokens]);
});

When('TextEditor calls {string}', function (
  this: GovorunWorld,
  calledMethod: VoiceEditorAction,
) {
  const editor = this.voiceEditor;
  if (!editor) {
    throw new Error('VoiceEditor is not initialized');
  }

  const method = editor[calledMethod];
  if (typeof method !== 'function') {
    throw new Error(`VoiceEditor.${String(calledMethod)} is not a function`);
  }

  (method as () => void).call(editor);
});

When('TextEditor calls {string} with {string}', function (
  this: GovorunWorld,
  calledMethod: VoiceEditorActionWithParameter,
  parameter: string,
) {
  const editor = this.voiceEditor;
  if (!editor) {
    throw new Error('VoiceEditor is not initialized');
  }

  const method = editor[calledMethod];
  if (typeof method !== 'function') {
    throw new Error(`VoiceEditor.${String(calledMethod)} is not a function`);
  }

  (method as (value: string) => void).call(editor, parameter);
});

Then('It should return last element {string}', function (
  this: GovorunWorld,
  expectedWord: string,
) {
  const editor = this.voiceEditor;
  if (!editor) {
    throw new Error('VoiceEditor is not initialized');
  }

  const latestToken = editor.getLatestToken();
  assert.strictEqual(latestToken, expectedWord);
});

Then('It should return last word {string}', function (
  this: GovorunWorld,
  expectedWord: string,
) {
  const editor = this.voiceEditor;
  if (!editor) {
    throw new Error('VoiceEditor is not initialized');
  }

  const latestToken = editor.getLatestToken();
  assert.strictEqual(latestToken, expectedWord);
});
