import { nanoid } from 'nanoid';
import React from 'react';
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi';


import './Sidebar.css';

const Sidebar = ({ sidebarExpand, setSidebarExpand, notes, setNotes }) => {

    const noteBtnHandler = () => {
        setSidebarExpand(toggle => !toggle);
    }
    const createNoteHandler = (color) => {
        const container = document.getElementById("notes-container");
        const newNote = {
                id: nanoid(),
                title: "",
                text: "",
                date: new Date().toLocaleString(),
                color: color,
                size: "note-small app__note",
                }
        const newData = [...notes, newNote];
        setNotes(newData);
        setTimeout(() => container.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}), 100);
    }

    return (
        <div className="app__sidebar_wrapper">
            <div className="app__sidebar">
            {!sidebarExpand && (
                <div className="app__add_button">
                    <HiPlusCircle size={48} onClick={(e) => {
                        e.stopPropagation() 
                        noteBtnHandler()
                        }}/>
                </div>
            )}
            {sidebarExpand && (
                <div className="app__minus_button">
                    <HiMinusCircle size={48} onClick={(e) => {
                        e.stopPropagation() 
                        noteBtnHandler()}
                        }/>
                </div>
            )}
            </div>
            {sidebarExpand && (
                <div className="app__color_picker-wrapper"> 
                    <div className="app__color_picker">
                        <button type="button" className="colors color1" onClick={() => {
                                    createNoteHandler("bisque")
                                    noteBtnHandler()
                                }}></button> 
                        <button type="button" className="colors color2" onClick={() => {
                                    createNoteHandler("rgb(255, 255, 255)")
                                    noteBtnHandler()
                                }}></button> 
                        <button type="button" className="colors color3" onClick={() => {
                                    createNoteHandler("rgb(187, 255, 174)")
                                    noteBtnHandler()
                                }}></button> 
                        <button type="button" className="colors color4" onClick={() => {
                                    createNoteHandler("rgb(171, 126, 255)")
                                    noteBtnHandler()
                                }}></button> 
                        <button type="button" className="colors color5" onClick={() => {
                                    createNoteHandler("rgb(255, 132, 116)")
                                    noteBtnHandler()
                                }}></button> 
                    </div>
                </div>
            )}
            </div>
    )
}

export default Sidebar;