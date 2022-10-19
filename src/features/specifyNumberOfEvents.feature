Feature: Specify number of evnets

  Scenario: When user hasn't specified a number, 32 is the default number
    Given the user opens the app
    When the user sees a list of upcoming events
    Then the user should see 32 upcoming events

  Scenario: User can change the number of events they want to see
    Given the main page is open
    When the user puts a new number in the textbox
    Then the user should see that new number of events