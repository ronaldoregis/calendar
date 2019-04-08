import React from 'react';



class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      time: '',
      type: 'Solo',
      mode: 'create'
    }
  }

  render () {
    const {
      handleCloseEvent
    } = this.props

    const {
      name,
      time,
      type
    } = this.state
    return (
      <div>
        <div>
          <div>Event: {name}</div>
          <div>Date: {}</div>
          <div>Time: {time}</div>
          <div>Type: {type}</div>
          <div
            onClick={handleCloseEvent}
          >
            Close
          </div>
        </div>
      </div>
    )
  }
}

export default Event;