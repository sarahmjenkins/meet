import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
// import { mockData } from './mock-data';

class App extends Component {
  state = {
    locations: [],
    events: [],
    numberOfEvents: 32,
    selectedLocation: 'all',
  }

  updateEvents = (location = this.state.selectedLocation, eventCount) => {
    console.log(location, eventCount);
    
    getEvents().then((events) => {
        const locationEvents = (location === 'all')
          ? events
          : events.filter((event) => event.location === location);
        console.log(locationEvents);
        this.setState({
          events: locationEvents.slice(0, eventCount),
          selectedLocation: location,
          numberOfEvents: eventCount
        });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0,this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
      
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  
  render() {
    const { locations, events } = this.state;

    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={events}/>
      </div>
    );
  }
}

export default App;
