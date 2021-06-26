import React from 'react';

function SearchBar(props) {
    console.log(props)
    return(
        <div>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search your log entries"
                    name="search" 
                    onChange={props.handleChange}
                />
        </div>
    )
};

export default SearchBar;
