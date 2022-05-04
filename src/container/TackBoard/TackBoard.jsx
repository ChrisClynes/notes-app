import React from 'react';

import { Notes } from '../../container';

import './TackBoard.css';

const TackBoard = ({ notes }) => {



    return (
        <div className="app__tackBoard ">
            <div className="app__notes-container">
                {notes.map((note) => (
                    <Notes id={note.id} text={note.text} date={note.date} color={note.color}/> 
                ))}
            </div>
        </div>
    )
}

export default TackBoard;