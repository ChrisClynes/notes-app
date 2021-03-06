import React from 'react';

import { Notes } from '../../container';

import './TackBoard.css';

const TackBoard = ({ notes, setNotes, searchValue }) => {



    return (
        <div className="app__tackBoard" >
            <div className="app__notes-container" id="notes-container">
                {notes.filter((note) => note.text.toLowerCase().includes(searchValue)).map((note) => (
                    <Notes 
                        key={note.id} 
                        componentId={note.id} 
                        title={note.title} 
                        text={note.text} 
                        date={note.date} 
                        color={note.color} 
                        setNotes={setNotes} 
                        notes={notes} 
                        size={note.size} 
                    /> 
                ))}
            </div>
        </div>
    )
}

export default TackBoard;