import React from 'react'
import {Paper, TextField, Typography} from '@material-ui/core'
class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    // The following lines represent the concept of binding of functions. This is done because
    // functions like handleSubmit will use the 'this' keyword to perform operations.
    // The 'this' keyword used by this function, however, wouldn't know which object 
    // to point to. This is the reason we need to bind functions like these to their 
    // respective classes. This can be acheived by using an arrow functions
    // because arrow functions don't have their own 'this', the interpreter
    // will be forced to recognize which object the 'this' is pointing to.
    handleChange=(event)=> {
        this.setState({ searchTerm: event.target.value});
        // console.log(event.target.value);
    }

    handleSubmit=(event)=>{
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        // console.log(event.target.value);
        event.preventDefault();
    }
    render(){
        return (
            <>
             
               <Paper elevation={6} style={{}}>
                   <form onSubmit={this.handleSubmit}>
                       <TextField fullWidth id="filled-basic" label="Search..." variant="filled" onChange={this.handleChange} style={{textDecorationColor:"#ffffff"}}/>
                   </form>
               </Paper>
            </>
        )
    }
}

export default SearchBar;