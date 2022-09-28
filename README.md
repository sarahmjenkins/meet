# Meet App

## About this app

This app is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. This app uses the Google Calendar API to fetch upcoming events. 

## Key features
- Filter events by city
- Show/hide event details
- Specify number of events
- Use the app when offline
- Add an app shortcut to the home screen
- View a chart showing the number of upcoming events by city

## Scenarios by key feature

### Filter events by city

>As a **user**  
>I should be able to **filter events by city**  
>So that **I can see the list of events that take place in that city**

1. **Scenario One:** When user hasn't searched for a city, show upcoming events from all cities.

>**Given** user hasn't searched for any city  
>**When** the user opens the app  
>**Then** the user should see a list of all upcoming events

2. **Scenario Two:** User should see a list of suggestions when they search for a city.

>**Given** the main page is open  
>**When** the user starts typing in the city textbox  
>**Then** the user should see a list of all suggested cities that match what they've typed

3. **Scenario Three:** User can select a city from the suggested list.

>**Given** the user was typing "Denver" in the city textbox, and the list of suggested cities is showing  
>**When** the user selects a city (e.g., Denver, Colorado) from the list  
>**Then** their city should be changed to that city (i.e., Denver, Colorado),and the user should receive a list of upcoming events in that city

### Show/hide event details

>As a **user**  
>I should be able to **show and hide event details**  
>So that **I can choose which event details to see or not see**

1. **Scenario One:** An event element is collapsed by default.

>**Given** the user selected a city to see the upcoming events  
>**When** the user doesn't select a specific event  
>**Then** events should be collapsed and not display details

2. **Scenario Two:** User can expand an event to see its details.

>**Given** the user selected a city to see the upcoming events  
>**When** the user selects a specific event  
>**Then** the selected event's should expand, and its details should display

3. **Scenario Three:** User can collapse an event to hide its details.

>**Given** the user selected an event and the details are displayed  
>**When** the user clicks on the collapse button  
>**Then** the selected event should collapse and not display its details

### Specify number of events

>As a **user**  
>I should be able to **specity the number of events displayed**  
>So that **I can choose how many events appear at once**

1. **Scenario One:** When user hasn't specified a number, 32 is the default number.

>**Given** the user has selected a city to see the upcoming events  
>**When** the user doesn't select the number of events to display  
>**Then** the user should see 32 upcoming events

2. **Scenario Two:** User can change the number of events they want to see.

>**Given** the user has selected a city to see the upcoming events  
>**When** the user chooses the number of events to display  
>**Then** the user should see the selected number of upcoming events

### Use the app when offline

>As a **user**  
>I should be able to **use the app when offline**  
>So that **I can see events without needing an internet connection**

1. **Scenario One:** Show cached data when there is no internet connection.

>**Given** the user's device is not connected to the internet or cellular data  
>**When** the user opens the app  
>**Then** the user should see cached data

2. **Scenario Two:** Show error when user changes the setings (city, time range).

>**Given** the user's device is not connected to the internet or cellular data  
>**When** the user opens the app and changes the settings  
>**Then** the user should see an error message

### View a chart showing the number of upcoming events by city

>As a **user**  
>I should be able to **see the number of upcoming events in each city**  
>So that **I can see how many events there are to choose from in different cities**

1. **Scenario One:** Show a chart with the number of upcoming events in each city.

>**Given** the user hasn't selected a single city  
>**When** the users chooses to view number of events by city  
>**Then** the user should see a chart displaying number of events per city

## Dependencies

- Create-React-App
