import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('the user opens the app', () => {  
      AppWrapper = mount(<App />);
    });

    when('the user sees a list of upcoming events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('events should be collapsed and not display details', () => {
      const eventDetails = AppWrapper.find('.event .event-details');
      expect(eventDetails).toHaveLength(0); 
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the user sees a list of upcoming events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on an event\'s details button', () => {
      AppWrapper.update();
      AppWrapper.find('.event .toggle-button').at(0).simulate('click');
    });

    then('the selected event should expand, and its details should display', () => {
      const eventDetails = AppWrapper.find('.event .event-details');
      expect(eventDetails).toHaveLength(1); 
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the user selected an event and the details are displayed', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.event .toggle-button').at(0).simulate('click');
    });

    when('the user clicks on the collapse button', () => {
      AppWrapper.update();
      AppWrapper.find('.event .toggle-button').at(0).simulate('click');
    });

    then('the selected event should collapse and not display its details', () => {
      const eventDetails = AppWrapper.find('.event .event-details');
      expect(eventDetails).toHaveLength(0); 
    });
  });
});