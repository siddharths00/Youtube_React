import React from 'react';
import {Paper, Typography} from '@material-ui/core';

// The {video} written below is the destructuring of the object.
// We could also have passed props as the parameter and then use it as props.video
const VideoDetail=({video}) => {
    console.log("hello" ,video);
    if(!video)  return <div>Loading...</div>
    // The ${} below represent that we will be using dynamic data.
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        // The brackets below could also have been written as <React.Fragment> and <React.Fragment/>
        <>
            <Paper elevation={6} style={{height:'50%', backgroundColor: "#262626"}}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{padding: '5px', backgroundColor: "#262626", color:"#ffffff"}}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
                
            </Paper>
        </>
    )
}

export default VideoDetail;