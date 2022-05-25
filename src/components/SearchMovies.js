import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { listMovies } from '../graphql/queries';
import '../styles/SearchMovies.css';
import AddMovieModal from './AddMovieModal';
import ViewMovies from './ViewMovies';

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
        // Only fetch the the modal is being closed (or else it would query twice)
        if (!isAddModalOpen) {
            fetchMovies();
        }
    }, [isAddModalOpen]); // Re-fetch when a new movie is added  

    return (
        <div className="body">
            
            <Form className="d-flex justify-content-center">
             
                <FormControl
                    size="lg"
                    type="search"
                    value={searchField}
                    onChange={ e => setSearchField(e.target.value) }
                    placeholder="Starwars..."
                    aria-label="Search for movies"
                    className="d-flex"
                    style={{width: "88%"}}
                />
                &nbsp;&nbsp;
                <Button className="button" variant="dark" onClick={e => setIsAddModalOpen(true)}>+</Button>
            </Form>

            &nbsp;&nbsp;
            <ViewMovies movies={movies} filter={searchField} setMovies={setMovies} />

            <AddMovieModal isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} />
        </div>
    );
}

export default SearchMovies;