Feature: VoiceEditor

  Scenario: VoiceEditor Works
    When TextEditor gets standard text
    Then It should return last word "зашагал"
