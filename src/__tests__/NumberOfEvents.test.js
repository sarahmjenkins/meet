import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

// Tests to include:
//   (x)Render text input
//   (x)Input default is 32
//   (x)Text input changes state
//   (x)Text input is rendered correctly
//   ( )Text input matches number of events rendered ()

describe('<NumberOfEvents /> component', () => {
  test('render text input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
  });

  test('default input is 32', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('input').prop('value')).toBe(32);
  });

  test('text input changes value of number of events', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    })
    const inputEvent = { target: { value: 5 }};
    NumberOfEventsWrapper.find('input').simulate('change', inputEvent);
    expect (NumberOfEventsWrapper.state('numberOfEvents')).toBe(5);
  });

  test('text input rendered correctly', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents')
    expect(NumberOfEventsWrapper.find('input').prop('value')).toBe(numberOfEvents);
  });
});