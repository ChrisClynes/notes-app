import React from 'react';

import { Notes } from '../../container';

import './TackBoard.css';

const TackBoard = () => {
    return (
        <div className="app__tackBoard app__bg">
            <div className="app__notes-container">
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            </div>
        </div>
    )
}

export default TackBoard;