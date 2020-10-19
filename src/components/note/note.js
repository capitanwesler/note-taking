import React from 'react';
import './note.css';

class Note extends React.Component {
    
    render() {
        return(
            <div id="note-container">
                <textarea rows="10" cols="40" placeholder="Enter some text for the note" />    
                <button onClick={this.props.handleNote} type="button">Save Note</button>
            </div>
        );
    }
}

export default Note;
