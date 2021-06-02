import React from 'react';
import {Grid, Typography} from '@material-ui/core';
// The curly brackets above mean that it is not a default export. Similarly, the lack of curly brackets below mean that what is imported is actully the default import.
import youtube from './api/youtube';
import config from 'dotenv';

import {SearchBar, VideoDetail, VideoList, Redirect} from './components';
// import Redirect from './components/Redirect';
class App extends React.Component {
  state={
    videos:[],
    selectedVideo: null,
  }

  componentDidMount(){
    this.handleSubmit('aurora borealis');
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }
  handleSubmit = async(searchTerm) => {
    // console.log(searchTerm);
    const response = await youtube.get('search', {
      params: {
      part:'snippet',
      maxResults:5,
      key:process.env.REACT_APP_YOUTUBE_API_KEY,
      q:searchTerm,
    }
  });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]}); 
}

  render(){
    const {selectedVideo, videos} = this.state;
    return (
      
      <Grid justify="center" container spacing={4} style={{backgroundColor: "#000000",}}>
         <Grid item xs={12}>
        <Grid container spacing={10}>
            
            {/* <Grid item xs={12}>
              <Redirect/>
            </Grid> */}
            {/* ------------------------------------------------------------------------------- */}
              <Grid container style={{height:"20px", paddingTop:"40px", paddingLeft:"50px", backgroundColor: "#262626"}}>
                <header className="App-header">
                  <a
                    className="App-link"
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={"https://cdn.iconscout.com/icon/free/png-256/youtube-85-226402.png"} height="100px" width="100px" paddingTop="40px" className="App-logo" alt="logo" />
                    <img src={"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"} height="90px" width="100px" paddingTop="40px" className="App-logo" alt="logo" />
                  </a>
                  
                  {/* <Typography><img src={"https://www.youtube.com/"} height="100px" width="100px" className="App-logo" alt="logo" /></Typography> */}
              </header>
            </Grid>
          {/* ----------------------------------------------------------------------------------- */}
            <Grid item xs={8} style={{marginInlineStart:"240px"}}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            
            <Grid item xs={8} style={{backgroundColor: "#262626"}}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            
            <Grid item xs={4} style={{backgroundColor: "#262626"}}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
           
          </Grid>
          
        </Grid> 
        
      </Grid>
    )
  }
}

export default App;