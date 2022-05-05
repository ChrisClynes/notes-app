import React, { useState } from 'react';
import { Header, Footer, Sidebar } from './components';
import { TackBoard } from './container';
import { nanoid } from 'nanoid';

import './App.css';

const App = () => {
    const [sidebarExpand, setSidebarExpand] = useState(false);
    const [toggleNoteColor, setToggleNoteColor] = useState(false);
    const [notes, setNotes] = useState([{
        id: nanoid(),
        title: "",
        text: "add a new note...",
        date: "",
        color: "#FFF"
    }]);

    return (
    <div className="app__page"> 
        <Header />
        <div className="app__main app__bg">
            <Sidebar notes={notes} setNotes={setNotes} sidebarExpand={sidebarExpand} setSidebarExpand={setSidebarExpand}/>
            <TackBoard notes={notes} setNotes={setNotes} sidebarExpand={sidebarExpand} setSidebarExpand={setSidebarExpand} toggleNoteColor={setToggleNoteColor} setToggleNoteColor={setToggleNoteColor}/>
        </div>
        <Footer />
    </div>
    )
}

export default App;