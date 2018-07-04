import React, { Component } from 'react';
import VideoButton from "./components/video_button";
import YTSearch from "youtube-api-search";
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDfqHbdWdMzB_UOH9XJLN1db9qboWEw3us';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('Barbara Palvin')
  };

  videoSearch(term) {
    let randomNum;
    let max =4;
    let min =0;
    randomNum = Math.floor(Math.random()*(max-min+1)+ min);
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[randomNum]
      });
    });
  }



  render(){

    const videoSearch = (term) =>{ this.videoSearch(term)};
    return (
      <div>
        <div style={{marginTop: '1%'}}>
        <h1 className="col-md-6" style={{marginBottom: '2%', marginRight: '3%'}}>&nbsp;&nbsp;Random Victoria's Secret model</h1>
        <span>
          <VideoButton
            onSearchTermChange={videoSearch}/>
        </span>
        </div>
        <VideoDetail video = {this.state.selectedVideo}/>
      </div>
    );
  }

}


export default App
