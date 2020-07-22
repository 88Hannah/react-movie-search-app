import React from 'react';
import MovieCard from './MovieCard';

function Results({movies, search}) {
    
    if (movies.length === 0) {
        return (
            <div className="no-results">
                <p>Sorry, there are no results to display for:</p>
                <p className="search-query">{search}</p>
            </div>
        )
    } 
    
    return (
        <div className="results">
            <p className="results-text">Results for <span className="search-query">{search}</span>:</p>
            <div className="card-list">
                {movies.map(movie => ( 
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Results;