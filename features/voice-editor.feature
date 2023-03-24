Feature: VoiceEditor

  Scenario: VoiceEditor Returns Last Inserted Token
    When TextEditor gets standard text
    Then It should return last element "."

  Scenario: VoiceEditor Moves to previous token
    When TextEditor gets standard text
    When TextEditor calls "moveElementBackward"
    Then It should return last element "зашагал"

  Scenario: VoiceEditor moves to previous token then moves back
    When TextEditor gets standard text
    When TextEditor calls "moveElementBackward"
    When TextEditor calls "moveElementForward"
    Then It should return last element "."

  Scenario: VoiceEditor Moves to previous word
    When TextEditor gets standard text
    When TextEditor calls "moveWordBackward"
    Then It should return last word "быстрей"

  Scenario: VoiceEditor Moves to next word
    When TextEditor gets standard text
    When TextEditor calls "moveWordBackward"
    When TextEditor calls "moveWordForward"
    Then It should return last word "зашагал"

  Scenario: VoiceEditor replaces current word
    When TextEditor gets standard text
    When TextEditor calls "replaceCurrentWord" with "побежал"
    Then It should return last word "побежал"
