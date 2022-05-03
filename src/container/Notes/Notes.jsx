import React from 'react';
import { MdOutlineDeleteOutline, MdColorLens } from 'react-icons/md';

import './Notes.css';

const Notes = () => {
    return (
        <div className="app__note">
            <div className="app__note-header">
                <input type="text" className="app__note-title" />
                <div className="app__note-buttons">
                    <MdColorLens size={24}/>
                    <MdOutlineDeleteOutline size={24}/>
                </div>
            </div>
            <div className="app__note-content notes-scrollbar">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan magna vel velit laoreet, at facilisis enim luctus. Aenean aliquet convallis lacus sed dictum. Nam congue, nunc quis condimentum aliquet, neque libero eleifend mi, eu consequat libero dolor id sapien. Ut vehicula arcu ut ligula varius suscipit. Donec luctus, purus ac lacinia rhoncus.
            </div>
            <div className="app__note-timestamp">
                Mar 2. 2022 10:40pm
            </div>
        </div>
    )
}

export default Notes;