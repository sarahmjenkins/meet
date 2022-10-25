import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';

class App extends Component {
  state = {
    locations: [],
    events: [],
    numberOfEvents: 32,
    selectedLocation: 'all',
    infoText: '',
    showWelcomeScreen: undefined
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

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    
    this.setState({ 
      showWelcomeScreen: !(code || isTokenValid) 
    });

    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }

    if (!navigator.onLine) {
      this.setState({
        infoText: 'Please connect to the internet to get an updated event list.'
      });
    } else {
      this.setState({
        infoText: ''
      })
    }  
  }

  componentWillUnmount() {
    this.mounted = false;
  };

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return {city, number};
    });
    console.log(data);
    return data;
  }
  
  render() {
    const { locations, events, showWelcomeScreen } = this.state;

    if (showWelcomeScreen === undefined) return <div className="App" />;

    return (
      <div className="App">
        <h1>Welcome to Meet App</h1>
        <h4>Choose a city</h4>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <WarningAlert text={this.state.infoText} />
        <h4>Events in each city</h4>
        <ResponsiveContainer height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={events}/>
        <WelcomeScreen showWelcomeScreen={showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
