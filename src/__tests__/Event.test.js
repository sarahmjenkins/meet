import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

// Tests to include:
//   (x)Render event container (x)
//   (x)Render event title
//   (x)Render event details container
//   (x)Render event details
//   (x)Render toggle button
//   (x)Toggle button changes state from !isVisible to isVisible
//   (x)Toggle button changes state from isVisible to !isVisible
//   (x)!isVisible hides details
//   (x)isVisible renders details
//   (x)!isVisible renders Get Details on toggle button
//   (x)isVisible renders Hide Details on toggle button

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData} />)
  })

  test('render event container', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })
  
  test('render event title', () => {
    expect(EventWrapper.find('.title')).toHaveLength(1);
  });

  test('render event details container', () => {
    expect(EventWrapper.find('.details-container')).toHaveLength(1);
  });

  test('render toggle button', () => {
    expect(EventWrapper.find('.toggle-button')).toHaveLength(1);
  });

  test('click to toggle state from not visible to visible', () => {
    EventWrapper.setState({
      isVisible: false 
    });
    EventWrapper.find('.toggle-button').simulate('click');
    expect(EventWrapper.state('isVisible')).toEqual(true);
  })

  test('click to toggle state from visible to not visible', () => {
    EventWrapper.setState({
      isVisible: true 
    });
    EventWrapper.find('.toggle-button').simulate('click');
    expect(EventWrapper.state('isVisible')).toEqual(false);
  })

  test('details do not render in not visible state', () => {
    EventWrapper.setState({
      isVisible: false 
    });
    expect(EventWrapper.find('.event-details')).toHaveLength(0);
  });

  test('details do render in visible state', () => {
    EventWrapper.setState({
      isVisible: true 
    });
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
  });

  test('button renders Get Details in not visible state', () => {
    EventWrapper.setState({
      isVisible: false 
    });
    expect(EventWrapper.find('.toggle-button').text().includes('Get Details')).toBe(true);
  });

  test('button renders Hide Details in visible state', () => {
    EventWrapper.setState({
      isVisible: true 
    });
    expect(EventWrapper.find('.toggle-button').text().includes('Hide Details')).toBe(true);
  });
})