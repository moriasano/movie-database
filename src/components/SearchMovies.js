import '../styles/SearchMovies.css';

import { useState, useEffect } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import AddMovieModal from './AddMovieModal';

import { DataStore } from '@aws-amplify/datastore';
import { Movies } from '../models';


function SearchMovies() {
    const [movies, setMovies] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);


    // Fetch Movies
    useEffect(() => {
        async function fetchMovies() {
            const movies = await DataStore(Movies);
            alert(movies);
            setMovies(movies);
        }
        fetchMovies();
    }, []);

    

    return (
        <div className="body">
            
            <Form className="d-flex">
                <FormControl
                    size="lg"
                    type="search"
                    value={searchField}
                    onChange={ e => setSearchField(e.target.value) }
                    placeholder="Starwars..."
                    aria-label="Search for movies"
                />
                &nbsp;&nbsp;
                <Button className="button" variant="dark" onClick={e => setIsAddModalOpen(true)}>+</Button>
            </Form>

            {movies}

            <AddMovieModal isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen}/>
        </div>
    );
}

export default SearchMovies;