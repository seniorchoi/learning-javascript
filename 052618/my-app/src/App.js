import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import CoolLogo from './components/cool_logo';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import EditableTable from './components/test';

const API_KEY = 'AIzaSyDfqHbdWdMzB_UOH9XJLN1db9qboWEw3us';



class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [],
                        selectedVideo: null
        };
        this.videoSearch('shiba inu')


    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) =>{
            this.setState({videos : videos,
                selectedVideo: videos[0]

            });
        });
    }

  render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="App">
        <CoolLogo/>

          <div>
              <EditableTable/>
          </div>
      </div>
    );
  }
}

export default App;
