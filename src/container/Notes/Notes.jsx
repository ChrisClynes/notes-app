import React from 'react';
import { MdOutlineDeleteOutline, MdColorLens } from 'react-icons/md';

import './Notes.css';

const Notes = ({ id, text, date, color }) => {
    return (
        <div className="app__note" style={{backgroundColor: `${color}`}}>
            <div className="app__note-header">
                <input type="text" className="app__note-title" placeholder='add a title'/>
                <div className="app__note-buttons">
                    <MdColorLens size={24}/>
                    <MdOutlineDeleteOutline size={24}/>
                </div>
            </div>
            <div className="app__note-content notes-scrollbar">
                {text}
            </div>
            <div className="app__note-timestamp">
                {date}
            </div>
        </div>
    )
}

export default Notes;