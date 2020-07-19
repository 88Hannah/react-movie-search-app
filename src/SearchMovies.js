import React, {useState} from 'react';
import MovieCard from './MovieCard';

function SearchMovies() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);


    const searchMovies = async event => {
        event.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=8093870b1d5bc24fb2f7368b79e14351&language=en&query=${query}&page=1&include_adult=false`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
        } catch(error) {
            console.log(error)
        }
    }


    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
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

            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => ( 
                    <MovieCard movie={movie}  key={movie.id}/>
                ))}
            </div>
        </>
    )

}

export default SearchMovies