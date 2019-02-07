import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
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
    this.interval = setInterval(() => this.tick(), 16);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let rad = (this.state.date.getMinutes() + this.state.date.getSeconds() / 60);
    let sRad = (this.state.date.getSeconds() * 1000 + this.state.date.getMilliseconds())/60000;
    let options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return (
      <div className="Clock">
        <div className="Times">
          <span className="Hours">{this.state.date.getHours().toString().padStart(2, '0')}</span>
          <span className="Mins">{this.state.date.getMinutes().toString().padStart(2, '0')}</span>
          <span className="Secs">{this.state.date.getSeconds().toString().padStart(2, '0')}</span>
        </div>
        <span className="Date">{this.state.date.toLocaleDateString('en-US', options)}</span>
        <div className="Minutes" style={{ clipPath: 
          (rad < 7.5) ? `polygon(50% 0, 50% 50%, ${50 + rad/7.5 * 50}% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 0 0)`
          : (rad < 22.5) ? `polygon(50% 0, 50% 50%, 100% ${(rad - 7.5) / 15 * 100}%, 100% 0, 100% 100%, 0 100%, 0 50%, 0 0)`
          : (rad < 37.5) ? `polygon(50% 0, 50% 0, 50% 50%, ${100 - (rad - 22.5)/15 * 100}% 100%, 50% 100%, 0 100%, 0 50%, 0 0)`
          : (rad < 52.5) ? `polygon(50% 0%, 50% 50%, 50% 100%, 0 ${100 - (rad - 37.5)/15 * 100}%, 0 50%, 0 0)` 
          : `polygon(0 0, 50% 0, 50% 50%, ${(rad - 52.5)/7.5 * 50}% 0)`
        }}>
        </div>
        <div className="Minutes-Negative" style={{ clipPath: 
          (rad < 7.5) ? `polygon(50% 0, 100% 0, ${50 + rad / 7.5 * 50}% 0, 50% 50%)`
          : (rad < 22.5) ? `polygon(50% 0, 100% 0, 100% ${(rad - 7.5) / 15 * 100}%, 50% 50%)`
          : (rad < 37.5) ? `polygon(50% 0%, 100% 0, 100% 100%, 0 100%, ${100 - (rad - 22.5) / 15 * 100}% 100%, 50% 50%)`
          : (rad < 52.5) ? `polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 ${100 - (rad - 37.5)/15 * 100}%, 50% 50%)` 
          : `polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0, ${(rad - 52.5) / 7.5 * 50}% 0, 50% 50%)`
        }}>
        </div>
        <div className="Seconds" style={{transform: `rotate(${sRad * 360}deg)`, transformOrigin: 'bottom'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </div>
      </div>
    );
  }
}

export default Clock;
