import React, { useState } from 'react';
import { MdOutlineDeleteOutline, MdColorLens } from 'react-icons/md';
import { CgExpand } from 'react-icons/cg';


import './Notes.css';

const Notes = ({ setNotes, notes, title, text, date, color, size, componentId }) => {

    const [toggleNoteColor, setToggleNoteColor] = useState(false);
    const [noteSize, setNoteSize ] = useState("note-small app__note");

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
        console.log(`${idToRemove} is being removed`)
        const currentData = [...notes].filter(obj => obj.id !== idToRemove);
        setNotes(currentData);
    }

    const handleSizeToggle = (currentSize, id) => {
        const el = document.querySelector(`#id${id}`)
        const sm = /note-small/;
        const md = /note-medium/;
        const lg = /note-large/;

            if(currentSize.match(sm) == "note-small"){
                el.classList.remove("note-small");
                handleUpdateNote("size", "note-medium", id);
            }else if(currentSize.match(md) == "note-medium"){
                el.classList.remove("note-medium");
                handleUpdateNote("size", "note-large", id);
            }else if(currentSize.match(lg) == "note-large"){
                el.classList.remove("note-large");
                handleUpdateNote("size", "note-small", id);
            }     
    }

    return (
        <div className={size} id={`id${componentId}`} style={{backgroundColor: `${color}`}}>
             {toggleNoteColor && (
                <div className="app__note_color-picker">
                        <button type="button" className="noteColors noteColor1" onClick={() => {
                                handleUpdateNote("color", "bisque", componentId)
                                handleNoteColortoggle(componentId)
                            }}></button> 
                        <button type="button" className="noteColors noteColor2" onClick={() => {
                                handleUpdateNote("color", "rgb(255, 255, 255)", componentId)
                                handleNoteColortoggle(componentId)
                            }}></button> 
                        <button type="button" className="noteColors noteColor3" onClick={() => {
                                handleUpdateNote("color", "rgb(187, 255, 174)", componentId)
                                handleNoteColortoggle(componentId)
                            }}></button> 
                        <button type="button" className="noteColors noteColor4" onClick={() => {
                                handleUpdateNote("color", "rgb(171, 126, 255)", componentId)
                                handleNoteColortoggle(componentId)
                            }}></button> 
                        <button type="button" className="noteColors noteColor5" onClick={() => {
                                handleUpdateNote("color", "rgb(255, 132, 116)", componentId)
                                handleNoteColortoggle(componentId)
                            }}></button> 
                </div>
            )}
            <div className="app__note-header">
                <input type="text" className="app__note-title" value={title} placeholder="add a title" onChange={(e) => handleUpdateNote("title", e.target.value, componentId)}/>
                <div className="app__note-buttons">
                    <MdColorLens size={24} onClick={() => {handleNoteColortoggle(componentId)}}/>
                    <MdOutlineDeleteOutline size={24} onClick={() => {handleDeleteNote(componentId)}}/>
                </div>
            </div>
            <textarea type="text" className="app__note-content notes-scrollbar" value={text} placeholder="add a new note..." onChange={(e) => handleUpdateNote("text", e.target.value, componentId)} />
            <div className="app__note-footer">
                <div className="app__note-timestamp">
                    {date}
                </div>
            </div>
            <CgExpand className="app__note-sizing-btn" onClick={() => handleSizeToggle(size, componentId)} />
        </div>
    )
}

export default Notes;