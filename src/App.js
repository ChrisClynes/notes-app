import React from 'react';
import { Header, Footer, Sidebar } from './components';
import { TackBoard } from './container';

import './App.css';

const App = () => (
    <div className="app__page"> 
        <Header />
        <div className="app__main">
            <Sidebar />
            <TackBoard />
        </div>
        <Footer />
    </div>
)

export default App;