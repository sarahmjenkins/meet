import React, { Component} from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    });
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

      </div>
    )
  }
}

export default NumberOfEvents;