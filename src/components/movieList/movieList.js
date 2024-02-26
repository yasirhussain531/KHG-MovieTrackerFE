import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import Header from './../../components/header/Header';
import SearchBar from './../../components/searchbar/searchbar';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=e154188bcdd2ddcd55734545fbc223c1&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
        .catch(error => console.error("Error fetching movie data:", error));
    }

    const handleSearch = (searchQuery) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=e154188bcdd2ddcd55734545fbc223c1&query=${searchQuery}`)
            .then(res => res.json())
            .then(data => setMovieList(data.results)) // Update movieList state with search results
            .catch(error => console.error("Error fetching search results:", error));
    }

    return (
        <div>
            <div className="SearchBar">
            <SearchBar onSearch={handleSearch} />
            </div>
            <div className="movie__list">
                <h2 className="list__title">{`${(type === 'top_rated' ? 'TOP RATED' : (type ? type.toUpperCase() : 'POPULAR'))}`}</h2>
                <div className="list__cards">
                    {
                        movieList.map(movie => (
                            <Cards key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieList;