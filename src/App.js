import React, { useState, useEffect } from 'react';
import { Header, Footer, Sidebar } from './components';
import { TackBoard } from './container';
import { nanoid } from 'nanoid';

import './App.css';

const App = () => {
    const [sidebarExpand, setSidebarExpand] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('react-notes-data')) || 
                    [{
                        id: nanoid(),
                        title: "",
                        text: "",
                        date: "",
                        color: "#FFF",
                        size: "note-small app__note",
                    }]
                )//loads local storage if it exists, else loads note template above

    useEffect(() => {
        localStorage.setItem(
            'react-notes-data', 
            JSON.stringify(notes)
            );
    }, [notes]);//this saves notes state to local storage, react-notes-data is the key, stringify the data
    
    

    return (
    <div className="app__page"> 
        <Header setSearchValue={setSearchValue} />
        <div className="app__main app__bg">
            <Sidebar notes={notes} setNotes={setNotes} sidebarExpand={sidebarExpand} setSidebarExpand={setSidebarExpand} />
            <TackBoard notes={notes} setNotes={setNotes} sidebarExpand={sidebarExpand} setSidebarExpand={setSidebarExpand} searchValue={searchValue} />
        </div>
        <Footer />
    </div>
    );
}

export default App;