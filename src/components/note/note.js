import React from 'react';
import './note.css';

class Note extends React.Component {
    
    render() {
        return(
            <div id="note-container">
                <div id="note-text">
                    <textarea rows="10" cols="40" placeholder="Enter some text for the note" />    
                    <button onClick={this.props.handleNote} type="button">Save Note</button>
                </div>
                <div id="show-all-notes">
                    <p>Notes: </p>
                    <ul id="notes">                        
                    </ul>
                    <button id="button-notes" onClick={this.props.showNotes}>Show Notes</button>
                </div>
            </div>
        );
    }
}
    

export default Note;
