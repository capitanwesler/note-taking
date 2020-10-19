import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar/navbar';
import Note from './components/note/note';

class NoteTaking extends React.Component {

    state = {
        notes: [],
    }

    handleNote = () => {

        let textArea = document.querySelector("#note-container textarea");
        
        

        this.setState({
            notes: [...this.state.notes, textArea.value] 
        });
    }

    showNotes = () => {
        let notesContainer = document.getElementById("notes");

        for (const note of this.state.notes) {
            let noteLi = document.createElement("li");

            noteLi.innerText = note;
            notesContainer.appendChild(noteLi);
        }
    }
    
    render() {
        return(
            <div id="main-container">
                <Navbar />
                <Note 
                    handleNote={this.handleNote}    
                    notes={this.state.notes}
                    showNotes={this.showNotes}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <NoteTaking />,
    document.getElementById("root")
);

