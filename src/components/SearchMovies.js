import '../styles/SearchMovies.css';

import { useState } from 'react';
import { Button, Form, FormControl, Modal } from 'react-bootstrap';
import AddMovieModal from './AddMovieModal';


function SearchMovies() {
    // const [movies, setMovies] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

            <AddMovieModal isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen}/>
        </div>
    );
}

export default SearchMovies;