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
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    this.setState(previous => ({
      index: (previous.index === 0) ? (previous.videos.length - 1) : --previous.index
    }));
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
        <button className="Video-Previous-Button" onClick={this.previous}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg></button>
        <button className="Video-Next-Button" onClick={this.next}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg></button>
        <a href="https://github.com/Chalarangelo/elegantime" target="_blank" rel="noopener noreferrer" className="Github-Link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
      </div>
    )
  }
}

export default VideoBackground;
