import React, { Component } from 'react';
import './Elegantime.css';

class Elegantime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  tick() {
    this.setState(previous => ({
      date: new Date()
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Clock">
        <p className="Hours">{this.state.date.getSeconds()}</p>
      </div>
    );
  }
}

export default Elegantime;
