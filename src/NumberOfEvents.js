import React, { Component} from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: ''
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    if (value > 32 || value < 0) {
      this.setState({
        infoText: 'Please enter a number between 1 and 32.'
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: ''
      });
    }
    
    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <div className="event-number">
        <input 
          type="text"
          className="display-number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
        />
        <ErrorAlert text={this.state.infoText} />
      </div>
    )
  }
}

export default NumberOfEvents;