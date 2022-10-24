import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { WarningAlert } from './Alert';

class App extends Component {
  state = {
    locations: [],
    events: [],
    numberOfEvents: 32,
    selectedLocation: 'all',
    infoText: ''
  };

  updateEvents = (location = this.state.selectedLocation, eventCount) => {
    getEvents().then((events) => {
        const locationEvents = (location === 'all')
          ? events
          : events.filter((event) => event.location === location);
        this.setState({
          events: locationEvents.slice(0, eventCount),
          selectedLocation: location,
          numberOfEvents: eventCount
        });
    });
  };

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

    if (!navigator.onLine) {
      this.setState({
        infoText: 'Please connect to the internet to get an updated event list.'
      });
    } else {
      this.setState({
        infoText: ''
      })
    }    
  };

  componentWillUnmount() {
    this.mounted = false;
  };
  
  render() {
    const { locations, events } = this.state;

    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <WarningAlert text={this.state.infoText} />
        <EventList events={events}/>
      </div>
    );
  }
}

export default App;
