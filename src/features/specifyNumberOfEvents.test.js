import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
   test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
      let AppWrapper;
      given('the user opens the app', () => {
        AppWrapper = mount(<App />);
      });

      when('the user sees a list of upcoming events', () => {
        AppWrapper.update();
      });

      then('the user should see 32 upcoming events', () => {
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
      });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
      let NumberOfEventsWrapper;
      given('the main page is open', () => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    	});
      
    	when('the user puts a new number in the textbox', () => {
        NumberOfEventsWrapper.find('.display-number').simulate('change', { target: { value: 5 } });
    	});

    	then('the user should see that new number of events', () => {
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(5);
    	});
    });
})