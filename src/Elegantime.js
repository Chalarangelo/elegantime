import React, { Component } from 'react';
import Clock from './Clock';
import VideoBackground from './VideoBackground';

class Elegantime extends Component {
  render() {
    return (
      <div>
        <Clock />
        <VideoBackground />
      </div>
    )
  }

}

export default Elegantime;