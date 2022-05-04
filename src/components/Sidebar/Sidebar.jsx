import React from 'react';
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi';

import './Sidebar.css';

const Sidebar = ({ toggleAddNote, setToggleAddNote, notes, setNotes }) => {

    const noteBtnHandler = (e) => {
        setToggleAddNote(toggle => !toggle)
        e.stopPropagation()
    }
    const createNoteHandler = (color) => {
        console.log(color)
    }

    return (
        <div className="app__sidebar_wrapper">
            <div className="app__sidebar">
            {!toggleAddNote && (
                <div className="app__add_button">
                    <HiPlusCircle size={48} onClick={noteBtnHandler(e)}/>
                </div>
            )}
            {toggleAddNote && (
                <div className="app__minus_button">
                    <HiMinusCircle size={48} onClick={noteBtnHandler(e)}/>
                </div>
            )}
            </div>
            {toggleAddNote && (
                <div className="app__color_picker-wrapper"> 
                    <div className="app__color_picker">
                        <div className="colors color1" onClick={createNoteHandler("bisque")}></div> 
                        <div className="colors color2" onClick={createNoteHandler("rgb(255, 255, 255)")}></div> 
                        <div className="colors color3" onClick={createNoteHandler("rgb(187, 255, 174)")}></div> 
                        <div className="colors color4" onClick={createNoteHandler("rgb(171, 126, 255)")}></div> 
                        <div className="colors color5" onClick={createNoteHandler("rgb(255, 132, 116)")}></div> 
                    </div>
                </div>
            )}
            </div>
    )
}

export default Sidebar;