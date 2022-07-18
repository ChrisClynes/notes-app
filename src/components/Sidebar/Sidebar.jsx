import { nanoid } from 'nanoid';
import React from 'react';
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi';

import { noteColors } from '../../App';


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
                <div className="app__sider_buttons">
                    <HiPlusCircle className="app__add_button" size={48} onClick={(e) => {
                        e.stopPropagation() 
                        noteBtnHandler()
                        }}/>
                </div>
            )}
            {sidebarExpand && (
                <div className="app__sider_buttons">
                    <HiMinusCircle className="app__minus_button" size={48} onClick={(e) => {
                        e.stopPropagation() 
                        noteBtnHandler()}
                        }/>
                </div>
            )}
            </div>
           
                <div className="app__color_picker-wrapper" style={sidebarExpand ? {transform: "translateX(0px)"} : {transform: "translateX(-100px)"}}> 
                    <div className="app__color_picker">
                        {noteColors.map((color, i) => (
                             <button key={i+1} type="button" className="colors" style={{backgroundColor: color}} onClick={() => {
                                createNoteHandler(color)
                                noteBtnHandler()
                            }}></button> 
                        ))

                        }
                    </div>
                </div>
          
            </div>
    )
}

export default Sidebar;