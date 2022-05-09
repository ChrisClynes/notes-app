import React from 'react';
import { MdSearch } from 'react-icons/md';

import  './Header.css';

const Header = ({ setSearchValue }) => {
    return (
        <div className="app__header">
            <div className="app__title">
                Notes
            </div>
            <div className="app__searchbar">
                <MdSearch className="spyglass-search-icon" /><input type="text" className="search-input" placeholder="search..." onChange={(e) => setSearchValue(e.target.value)} />
            </div>
        </div>
    )
}

export default Header;