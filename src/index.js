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
        
        //console.log(textArea);

        this.setState({
            notes: [...this.state.notes, textArea.value] 
        });

        //console.log(this.state.notes);
    }
    
    render() {
        return(
            <div id="main-container">
                <Navbar />
                <Note handleNote={this.handleNote} />
            </div>
        );
    }
}

ReactDOM.render(
    <NoteTaking />,
    document.getElementById("root")
);

