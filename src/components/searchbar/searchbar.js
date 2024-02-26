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
            <div class="wrap">
                <div class="search">
                <form onSubmit={handleSearchSubmit}>
                    <input 
                        type="text" 
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                        placeholder="What are you looking for?" 
                        className="searchTerm" 
                    />
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search"></i>
                        </button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
