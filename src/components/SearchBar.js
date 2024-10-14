import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [location, setLocation] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Code to handle the search functionality
        console.log('Search', location);
    };

    return (
            <div className="search-bar">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Enter PG Name or Landmark"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
    );
};

export default SearchBar;
