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


**Scenario One:** When user hasn't searched for a city, show upcoming events from all cities.

>**Given** user hasn't searched for any city  
>**When** the user opens the app  
>**Then** the user should see a list of all upcoming events


**Scenario Two:** User should see a list of suggestions when they search for a city.

>**Given** the main page is open  
>**When** the user starts typing in the city textbox  
>**Then** the user should see a list of all suggested cities that match what they've typed


**Scenario Three:** User can select a city from the suggested list.

>**Given** the user was typing "Denver" in the city textbox, and the list of suggested cities is showing  
>**When** the user selects a city (e.g., Denver, Colorado) from the list  
>**Then** their city should be changed to that city (i.e., Denver, Colorado),and the user should receive a list of upcoming events in that city


### Show/hide event details

>As a **user**  
>I should be able to **show and hide event details**  
>So that **I can choose which event details to see or not see**


**Scenario One:** An event element is collapsed by default.

>**Given** the user opens the app  
>**When** the user sees a list of upcoming events  
>**Then** events should be collapsed and not display details


**Scenario Two:** User can expand an event to see its details.

>**Given** the user sees a list of upcoming events  
>**When** the user clicks on an event's details button  
>**Then** the selected event should expand, and its details should display


**Scenario Three:** User can collapse an event to hide its details.

>**Given** the user selected an event and the details are displayed  
>**When** the user clicks on the collapse button  
>**Then** the selected event should collapse and not display its details


### Specify number of events

>As a **user**  
>I should be able to **specify the number of events displayed**  
>So that **I can choose how many events appear at once**


**Scenario One:** When user hasn't specified a number, 32 is the default number.

>**Given** the user opens the app  
>**When** the user sees a list of upcoming events  
>**Then** the user should see 32 upcoming events


**Scenario Two:** User can change the number of events they want to see.

>**Given** the main page is open  
>**When** the user puts a new number in the textbox  
>**Then** the user should see that new number of events


### Use the app when offline

>As a **user**  
>I should be able to **use the app when offline**  
>So that **I can see events without needing an internet connection**


**Scenario One:** Show cached data when there is no internet connection.

>**Given** the user's device is not connected to the internet or cellular data  
>**When** the user opens the app  
>**Then** the user should see cached data


**Scenario Two:** Show error when user changes the setings (city, time range).

>**Given** the user's device is not connected to the internet or cellular data  
>**When** the user opens the app and changes the settings  
>**Then** the user should see an error message


### View a chart showing the number of upcoming events by city

>As a **user**  
>I should be able to **see the number of upcoming events in each city**  
>So that **I can see how many events there are to choose from in different cities**


**Scenario One:** Show a chart with the number of upcoming events in each city.

>**Given** the user hasn't selected a single city  
>**When** the users chooses to view number of events by city  
>**Then** the user should see a chart displaying number of events per city

## Dependencies

- Create-React-App
