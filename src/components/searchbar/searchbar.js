import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Update the search query state as the user types
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        onSearch(searchQuery); // Pass the search query to the parent component
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                    placeholder="Search movies..." 
                    className="searchInput" 
                />
                <button type="submit" className="searchButton">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;
