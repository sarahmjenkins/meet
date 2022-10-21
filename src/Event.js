import React, { Component } from 'react';
import Moment from 'react-moment';

class Event extends Component {
  state = {
    isVisible: false
  }

  handleClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };
  
  render() {
    const { event } = this.props;
    const startTime = this.props.event.start.dateTime;
    const endTime = this.props.event.end.dateTime;

    return (
      <div className="event">
        <h1 className="title">{event.summary}</h1>
        <h3 className="location">{event.location}</h3>
        <div className="details-container">
          {this.state.isVisible 
            && <div className="event-details">
              <p><b>About this event:</b> {event.description}</p>
              <p><b>Start:</b> <Moment>{startTime}</Moment></p>
              <p><b>End:</b> <Moment>{endTime}</Moment></p>
            </div>}
          {this.state.isVisible 
            ? <button className="toggle-button" onClick={this.handleClick}>Hide Details</button>
            : <button className="toggle-button" onClick={this.handleClick}>Get Details</button>
          } 
        </div>
      </div>
    )
  }
}

export default Event;