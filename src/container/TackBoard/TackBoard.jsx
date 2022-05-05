import React from 'react';

import { Notes } from '../../container';

import './TackBoard.css';

const TackBoard = ({ notes, setNotes, toggleNoteColor, setToggleNoteColor }) => {



    return (
        <div className="app__tackBoard ">
            <div className="app__notes-container">
                {notes.map((note) => (
                    <Notes key={note.id} componentId={note.id} title={note.title} text={note.text} date={note.date} color={note.color} setNotes={setNotes} notes={notes} /> 
                ))}
            </div>
        </div>
    )
}

export default TackBoard;