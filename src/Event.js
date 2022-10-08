import React, { Component } from 'react';

class Event extends Component {
  state = {
    isVisible: true
  }

  handleClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };
  
  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h1 className="title">{event.summary}</h1>
        <div className="details-container">
          {this.state.isVisible && <p className="event-details">{event.description}</p>}
          {this.state.isVisible ? <button className="toggle-button" onClick={this.handleClick}>Hide Details</button>
            : <button className="toggle-button" onClick={this.handleClick}>Get Details</button>
          } 
        </div>
      </div>
    )
  }
}

export default Event;