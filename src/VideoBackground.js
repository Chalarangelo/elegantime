import React, { Component , Fragment } from 'react';
import './VideoBackground.css';

class VideoBackground extends Component {



  render() {
    return (
      <div className="Video-Container">
        <div className="Video-Overlay"></div>
        <iframe className="Video-Background" src="https://www.youtube.com/embed/HSsqzzuGTPo?controls=0&amp;start=39&amp;end=13120&amp;autoplay=1&amp;mute=1&amp;html5=True" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

export default VideoBackground;
