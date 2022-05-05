import React from 'react';
import { MdOutlineDeleteOutline, MdColorLens } from 'react-icons/md';
import { nanoid } from 'nanoid';

import './Notes.css';

const Notes = ({ setToggleNoteColor, toggleNoteColor, setNotes, notes, text, date, color, componentId }) => {
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
    const handleNoteColortoggle = () => {
        setToggleNoteColor(toggle => !toggle);
        console.log(toggleNoteColor)
    }

    const handleDeleteNote = (idToRemove) => {
        console.log(`${idToRemove} is being removed`)
        const currentData = [...notes].filter(obj => obj.id !== idToRemove);
        setNotes(currentData);
    }

    const changeColorHandler = () => {
        //push color to objects id color
    }

    return (
        <div className="app__note" style={{backgroundColor: `${color}`}}>
             {toggleNoteColor && (
                <div className="app__note_color-picker">
                        <button type="button" className="noteColors noteColor1" onClick={() => {changeColorHandler("bisque")}}></button> 
                        <button type="button" className="noteColors noteColor2" onClick={() => {changeColorHandler("rgb(255, 255, 255)")}}></button> 
                        <button type="button" className="noteColors noteColor3" onClick={() => {changeColorHandler("rgb(187, 255, 174)")}}></button> 
                        <button type="button" className="noteColors noteColor4" onClick={() => {changeColorHandler("rgb(171, 126, 255)")}}></button> 
                        <button type="button" className="noteColors noteColor5" onClick={() => {changeColorHandler("rgb(255, 132, 116)")}}></button> 
                </div>
            )}
            <div className="app__note-header">
                <input type="text" className="app__note-title" placeholder='add a title'/>
                <div className="app__note-buttons">
                    <MdColorLens size={24} onClick={() => {handleNoteColortoggle(componentId)}}/>
                    <MdOutlineDeleteOutline size={24} onClick={() => {handleDeleteNote(componentId)}}/>
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