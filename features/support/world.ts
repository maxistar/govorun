import type { IWorld } from '@cucumber/cucumber';

import type { VoiceEditor } from '../../src/voice-editor';

export interface GovorunWorld extends IWorld {
  whatIHeard?: string;
  tokens?: string[];
  voiceEditor?: VoiceEditor;
}
