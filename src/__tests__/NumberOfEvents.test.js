import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents eNumber={mockData.length} updateEvents={() => {}} />
    );
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
  });

  test('default input is 32', () => {
    expect(NumberOfEventsWrapper.find('input').prop('value')).toBe(32);
  });

  test('text input changes value of number of events', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    })
    const inputEvent = { target: { value: 5 }};
    NumberOfEventsWrapper.find('input').simulate('change', inputEvent);
    expect (NumberOfEventsWrapper.state('numberOfEvents')).toBe(5);
  });

  test('text input rendered correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents')
    expect(NumberOfEventsWrapper.find('input').prop('value')).toBe(numberOfEvents);
  });
});