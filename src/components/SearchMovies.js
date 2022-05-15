import '../styles/SearchMovies.css';

import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function SearchMovies() {
    // const [movies, setMovies] = useState([]);
    const [searchField, setSearchField] = useState("");

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
                <Button className="button">+</Button>
            </Form>
        </div>
    );
}

export default SearchMovies;