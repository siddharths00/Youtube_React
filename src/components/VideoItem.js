import React, { version } from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'

const VideoItem=({video, onVideoSelect})=> {
    return (
       <Grid item xs={12}>
           <Paper elevation={6} style={{display: 'flex', alignItems: 'center', cursor: 'pointer', backgroundColor: "#262626", color: "#ffffff", width:"500px",}} onClick={()=>onVideoSelect(video)}>
           <img style={{marginRight: '20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
           <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>    
           </Paper>
       </Grid>
    )
}
export default VideoItem; 