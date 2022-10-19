Feature: Show/hide event details

  Scenario: An event element is collapsed by default
    Given the user opens the app
    When the user sees a list of upcoming events
    Then events should be collapsed and not display details

  Scenario: User can expand an event to see its details
    Given the user sees a list of upcoming events
    When the user clicks on an event's details button
    Then the selected event should expand, and its details should display

  Scenario: User can collapse an event to hide its details
    Given the user selected an event and the details are displayed
    When the user clicks on the collapse button
    Then the selected event should collapse and not display its details