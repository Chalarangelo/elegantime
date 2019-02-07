import React, { Component } from 'react';
import './VideoBackground.css';
import videoArray from './videos';

class VideoBackground extends Component {
  constructor(props){
    super(props);
    this.state={
      videos: videoArray,
      index: 0
    }
  }

  next() {
    this.setState(previous => ({ 
      index: (previous.index === (previous.videos.length - 1)) ? 0 : ++previous.index
    }));
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.next(), (this.state.videos[this.state.index].end - this.state.videos[this.state.index].start) * 1000);
  }

  componentWillUpdate(nextProps, nextState) {
    this.timeout = setTimeout(() => this.next(), (nextState.videos[nextState.index].end - nextState.videos[nextState.index].start) * 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }


  render() {
    return (
      <div className="Video-Container">
        <div className="Video-Overlay"></div>
        <iframe title="Background video" className="Video-Background" src={`https://www.youtube.com/embed/${this.state.videos[this.state.index].url}?controls=0&amp;start=${this.state.videos[this.state.index].start}&amp;end=${this.state.videos[this.state.index].end}&amp;autoplay=1&amp;mute=1&amp;html5=True&amp;hd=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }
}

export default VideoBackground;
