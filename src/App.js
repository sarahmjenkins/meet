import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { extractLocations } from './api';
import { mockData } from './mock-data'

class App extends Component {
  state = {
    locations: extractLocations(mockData),
    events: mockData,
  }
  
  render() {
    const { locations, events } = this.state;

    return (
      <div className="App">
        <CitySearch locations={locations} />
        <EventList events={events}/>
      </div>
    );
  }
}

export default App;
