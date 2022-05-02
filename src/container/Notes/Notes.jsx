import React from 'react';

import './Notes.css';

const Notes = () => {
    return (
        <div className="app__note">
            <div className="app__note-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan magna vel velit laoreet, at facilisis enim luctus. Aenean aliquet convallis lacus sed dictum. Nam congue, nunc quis condimentum aliquet, neque libero eleifend mi, eu consequat libero dolor id sapien. Ut vehicula arcu ut ligula varius suscipit. Donec luctus, purus ac lacinia rhoncus.
            </div>
            <div className="app__note-timestamp">
                Mar 2. 2022 10:40pm
            </div>
        </div>
    )
}

export default Notes;