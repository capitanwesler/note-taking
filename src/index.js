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
        
        if (textArea.value !== "") {
            this.setState({
                notes: [...this.state.notes, textArea.value] 
            });
        }else {
            alert("You can't add a empty note, please try again !");
        }

        textArea.value = "Enter some text for your note !";

    }

    resetListNotes = () => {
        this.setState({
            notes: []
        });
    }
    
    render() {
        return(
            <div id="main-container">
                <Navbar />
                <Note 
                    handleNote={this.handleNote} 
                    notes={this.state.notes}
                    resetListNotes={this.resetListNotes}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <NoteTaking />,
    document.getElementById("root")
);

