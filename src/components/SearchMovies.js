import '../styles/SearchMovies.css';

import { useState, useEffect } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import AddMovieModal from './AddMovieModal';
import ViewMovies from './ViewMovies';

import { API } from 'aws-amplify';
import { listMovies } from '../graphql/queries';


function SearchMovies() {
    const [movies, setMovies] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Fetch Movies
    async function fetchMovies() {
        const apiData = await API.graphql({ query: listMovies });
        setMovies(apiData.data.listMovies.items);
    }
    useEffect(() => {
        fetchMovies();
    }, [isAddModalOpen]);
    

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

            <ViewMovies movies={movies} filter={searchField} />

            <AddMovieModal isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen}/>
        </div>
    );
}

export default SearchMovies;