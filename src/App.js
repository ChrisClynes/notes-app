import React, { useState } from 'react';
import { Header, Footer, Sidebar } from './components';
import { TackBoard } from './container';

import './App.css';

const App = () => {
    const [toggleAddNote, setToggleAddNote] = useState(false);

    return (
    <div className="app__page"> 
        <Header />
        <div className="app__main">
            <Sidebar toggleAddNote={toggleAddNote} />
            <TackBoard toggleAddNote={toggleAddNote} />
        </div>
        <Footer />
    </div>
    )
}

export default App;