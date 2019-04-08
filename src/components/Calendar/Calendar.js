import React from 'react';
import ReactCalendar from 'react-calendar';

import Event from './Event/Event'


class Calendar extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      showAddEvent: false
    }

    this.onDayClick = this.onDayClick.bind(this)
    this.handleCloseEvent = this.handleCloseEvent.bind(this)
  }

  state = {
    showAddEvent: false
  }

  onDayClick () {
    this.setState({
      showAddEvent: true
    })
  }

  handleCloseEvent () {
    this.setState({
      showAddEvent: false
    })
  }

  render () {
    const {
      showAddEvent
    } = this.state
    return (
      <div>
        <ReactCalendar
          onClickDay={this.onDayClick} 
        />
        {showAddEvent &&
          <Event 
            handleCloseEvent = {this.handleCloseEvent}
          />
        }
      </div>
      
    )
  }

}

export default Calendar;

