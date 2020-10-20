import React from 'react';
import './note.css';

class Note extends React.Component {

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.props.handleNote();

            let textArea = document.querySelector("#note-text textarea");

            textArea.value = "Enter some text for your note !"; 


        }
    }

    render() {
        return(
            <div id="note-container">
                <div id="note-text">
                    <p>Write your Note:</p>
                    <textarea 
                        onKeyPress={this.handleEnter}
                        rows="20" 
                        cols="40" 
                        placeholder="Enter some text to the note !" 
                    />    
                    <button onClick={this.props.handleNote} type="button">Save Note</button>
                </div>
                <div id="show-all-notes">
                    <p>Notes: </p>
                    <ul id="notes">
                        {this.props.notes.map((note, index) => {
                            return <li className="note-li" key={index}>{note}</li>;
                        })}
                    </ul>
                    <button type="button" onClick={this.props.resetListNotes}>Reset !</button> 
                </div>
            </div>
        );
    }
}
    

export default Note;
