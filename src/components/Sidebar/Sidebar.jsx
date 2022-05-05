import { nanoid } from 'nanoid';
import React from 'react';
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi';


import './Sidebar.css';

const Sidebar = ({ toggleAddNote, setToggleAddNote, notes, setNotes, title}) => {

    const noteBtnHandler = () => {
        setToggleAddNote(toggle => !toggle);
        console.log(notes)
    }
    const createNoteHandler = (color) => {
        const newNote = {
                id: nanoid(),
                title: "",
                text: "add a new note...",
                date: new Date().toLocaleString(),
                color: color
                }
        const newData = [...notes, newNote];
        setNotes(newData);
        //anchor to id to snap to new note
    }

    return (
        <div className="app__sidebar_wrapper">
            <div className="app__sidebar">
            {!toggleAddNote && (
                <div className="app__add_button">
                    <HiPlusCircle size={48} onClick={(e) => {
                        e.stopPropagation() 
                        noteBtnHandler()
                        }}/>
                </div>
            )}
            {toggleAddNote && (
                <div className="app__minus_button">
                    <HiMinusCircle size={48} onClick={(e) => {
                        e.stopPropagation() 
                        noteBtnHandler()}
                        }/>
                </div>
            )}
            </div>
            {toggleAddNote && (
                <div className="app__color_picker-wrapper"> 
                    <div className="app__color_picker">
                        <button type="button" className="colors color1" onClick={() => {createNoteHandler("bisque")}}></button> 
                        <button type="button" className="colors color2" onClick={() => {createNoteHandler("rgb(255, 255, 255)")}}></button> 
                        <button type="button" className="colors color3" onClick={() => {createNoteHandler("rgb(187, 255, 174)")}}></button> 
                        <button type="button" className="colors color4" onClick={() => {createNoteHandler("rgb(171, 126, 255)")}}></button> 
                        <button type="button" className="colors color5" onClick={() => {createNoteHandler("rgb(255, 132, 116)")}}></button> 
                    </div>
                </div>
            )}
            </div>
    )
}

export default Sidebar;