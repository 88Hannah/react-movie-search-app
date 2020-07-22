import React, {useState} from 'react';
import Error from './Error';
import Results from './Results';

function SearchMovies() {

    const [query, setQuery] = useState('');
    const [currentSearch, setCurrentSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [hasErrored, setHasErrored] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const searchMovies = async event => {
        event.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=8093870b1d5bc24fb2f7368b79e14351&language=en&query=${query}&page=1&include_adult=false`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
            
        } catch(error) {
            setHasErrored(true);
        }

        setCurrentSearch(query);
        setHasSearched(true);
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <input 
                    className="input" 
                    type="text" 
                    name="query" 
                    placeholder="Search here ..."
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                ></input>    
                <button className="button" type="submit">Search</button>
            </form>

            { hasSearched && 
                (
                    hasErrored ? 
                    <Error /> : 
                    <Results movies={movies.filter(movie => movie.poster_path)} search={currentSearch}/>
                )
            }
        </>
    )

}

export default SearchMovies;