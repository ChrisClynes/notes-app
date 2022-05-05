import React from 'react';
import { MdOutlineDeleteOutline, MdColorLens } from 'react-icons/md';
import { nanoid } from 'nanoid';

import './Notes.css';

const Notes = ({ setNotes, notes, text, date, color, note}) => {
    const handleUpdateNote = () => {
        // const newNote = {
        //         id: ,
        //         title: "title",
        //         text: "add a new note...",
        //         date: new Date().toLocaleString(),
        //         color: color
        //         }
        console.log("change made")
        // setNotes(newData);
    }

    const handleDeleteNote = (idToRemove) => {
        const currentData = [...notes];
        currentData.filter((obj) => {
           return idToRemove !== obj.id
        })
        setNotes(currentData);
    }

    return (
        <div className="app__note" style={{backgroundColor: `${color}`}}>
            <div className="app__note-header">
                <input type="text" className="app__note-title" placeholder='add a title'/>
                <div className="app__note-buttons">
                    <MdColorLens size={24}/>
                    <MdOutlineDeleteOutline size={24} onClick={() => {handleDeleteNote(note.id)}}/>
                </div>
            </div>
            <textarea type="text" className="app__note-content notes-scrollbar" placeholder={text} onChange={(e) => handleUpdateNote(e.target.value)} />
            <div className="app__note-timestamp">
                {date}
            </div>
        </div>
    )
}

export default Notes;