import React, { useState } from 'react';
import { MdOutlineDeleteOutline, MdColorLens } from 'react-icons/md';
import { CgArrowsExpandLeft } from 'react-icons/cg';

import { noteColors } from '../../App';


import './Notes.css';

const Notes = ({ setNotes, notes, title, text, date, color, size, componentId }) => {

    const [toggleNoteColor, setToggleNoteColor] = useState(false);

    const handleUpdateNote = (modifier, value, id) => {
        const newNotesArr = notes.map((note) => {
            const newNote = {
                id: id,
                title: modifier === "title" ? value : note.title,
                text: modifier === "text" ? value : note.text,
                date: new Date().toLocaleString(),
                color: modifier === "color" ? value : note.color,
                size: modifier === "size" ? `${value} app__note` : note.size,
                }
            if(note.id === id) {
                return newNote
            }else {
                return note;
            }
        })
        setNotes(newNotesArr);
    }

    const handleNoteColortoggle = () => {
        setToggleNoteColor(toggle => !toggle);
        
    }

    const handleDeleteNote = (idToRemove) => {
        const currentData = [...notes].filter(obj => obj.id !== idToRemove);
        setNotes(currentData);
    }

    const handleSizeToggle = (currentSize, id) => {
        const el = document.querySelector(`#id${id}`)
        const sm = /note-small/;
        const md = /note-medium/;
        const lg = /note-large/;

            if(currentSize.match(sm)){
                el.classList.remove("note-small");
                handleUpdateNote("size", "note-medium", id);
            }else if(currentSize.match(md)){
                el.classList.remove("note-medium");
                handleUpdateNote("size", "note-large", id);
            }else if(currentSize.match(lg)){
                el.classList.remove("note-large");
                handleUpdateNote("size", "note-small", id);
            }     
    }

    return (
        <div className={size} id={`id${componentId}`} style={{backgroundColor: `${color}`}}>
             {toggleNoteColor && (
                    <div className="app__note_color-picker">
                        {
                            noteColors.map((color, i) => (
                                <button key={i+1} type="button" className="noteColors" style={{backgroundColor: color}} onClick={() => {
                                    handleUpdateNote("color", color, componentId)
                                    handleNoteColortoggle(componentId)
                                }}></button>
                            ))
                        }
                    </div>
                )}   
            <div className="app__note-header">
                <input 
                    type="text" 
                    className="app__note-title" 
                    value={title} 
                    placeholder="add a title" 
                    onChange={(e) => handleUpdateNote("title", e.target.value, componentId)}
                />
                <div className="app__note-buttons">
                    <MdColorLens className="app__note-colorbtn" size={24} onClick={() => {handleNoteColortoggle(componentId)}}/>
                    <MdOutlineDeleteOutline className="app__note-deletebtn" size={24} onClick={() => {handleDeleteNote(componentId)}}/>
                </div>
            </div>
            <textarea 
                type="text" 
                className="app__note-content notes-scrollbar" 
                value={text} placeholder="add a new note..." 
                onChange={(e) => handleUpdateNote("text", e.target.value, componentId)}
            />
            <div className="app__note-footer">
                <div className="app__note-timestamp">
                    {date}
                </div>
            </div>
            <CgArrowsExpandLeft className="app__note-sizingbtn" onClick={() => handleSizeToggle(size, componentId)} />
        </div>
    )
}

export default Notes;