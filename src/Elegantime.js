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
    let rad = (this.state.date.getMinutes() + this.state.date.getSeconds() / 60);
    console.log(rad);
    return (
      <div className="Clock">
        <p className="Hours">{this.state.date.getHours().toString().padStart(2,'0')}</p>
        <div className="Minutes" style={{ clipPath: 
          (rad < 7.5) ? `polygon(50% 0, 50% 50%, ${50 + rad/7.5 * 50}% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 0 0)`
          : (rad < 22.5) ? `polygon(50% 0, 50% 50%, 100% ${(rad - 7.5) / 15 * 100}%, 100% 0, 100% 100%, 0 100%, 0 50%, 0 0)`
          : (rad < 37.5) ? `polygon(50% 0, 50% 0, 50% 50%, ${100 - (rad - 22.5)/15 * 100}% 100%, 50% 100%, 0 100%, 0 50%, 0 0)`
          : (rad < 52.5) ? `polygon(50% 0%, 50% 50%, 50% 100%, 0 ${100 - (rad - 37.5)/15 * 100}%, 0 50%, 0 0)` 
          : `polygon(0 0, 50% 0, 50% 50%, ${(rad - 52.5)/7.5 * 50}% 0)`
        }}>
        </div>
      </div>
    );
  }
}

export default Elegantime;
