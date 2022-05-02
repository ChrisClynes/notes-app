import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="app__sidebar">
            <div className="add__button">
                <BsPlusCircleFill />
            </div>
        </div>
    )
}

export default Sidebar;