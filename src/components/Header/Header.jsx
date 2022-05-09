import React from 'react';
import { MdSearch, MdOutlineClose } from 'react-icons/md';

import  './Header.css';



const Header = ({ setSearchValue }) => {
    
    const handleClearSearch = () => {
        const search = document.getElementById("search-input-id");
            search.value = search.defaultValue;
            setSearchValue(search.value);
    }

    return (
        <div className="app__header">
            <div className="app__title">
                Notes
            </div>
            <div className="app__searchbar">
                <MdSearch className="spyglass-search-icon" /><input type="text" className="search-input" id="search-input-id" placeholder="search..." onChange={(e) => setSearchValue(e.target.value)} /><MdOutlineClose className="clear-search-icon" onClick={() => handleClearSearch()}/>
            </div>
        </div>
    )
}

export default Header;