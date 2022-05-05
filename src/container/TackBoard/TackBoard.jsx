import React from 'react';

import { Notes } from '../../container';

import './TackBoard.css';

const TackBoard = ({ notes, setNotes }) => {



    return (
        <div className="app__tackBoard ">
            <div className="app__notes-container">
                {notes.map((note, index) => (
                    <Notes key={note.id} id={note.id} text={note.text} date={note.date} color={note.color} setNotes={setNotes}/> 
                ))}
            </div>
        </div>
    )
}

export default TackBoard;