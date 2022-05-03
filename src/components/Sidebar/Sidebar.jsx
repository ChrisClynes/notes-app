import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { HiMinusCircle } from 'react-icons/hi';

import './Sidebar.css';

const Sidebar = () => {

    return (
        <div className="app__sidebar_wrapper">
            <div className="app__sidebar">
                <div className="app__add_button">
                    <BsPlusCircleFill size={38}/>
                </div>
            </div>
            <div className="app__color_picker"> 
            </div>
        </div>
    )
}

export default Sidebar;