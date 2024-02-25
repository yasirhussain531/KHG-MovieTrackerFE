import React, { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import Logo from "../../assets/khg.webp"

const Header = () => {
    const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Update the search query state as the user types
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Implement the search functionality here
        console.log("Search query:", searchQuery);
    }

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src={Logo} alt="Logo" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight">
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
        </div>
    )
}

export default Header
