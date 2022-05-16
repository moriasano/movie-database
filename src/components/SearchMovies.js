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
        // console.log(apiData.data.listMovies.items);

        // let movieArray = []
        // for (var i in apiData.data.listMovies.items) {
        //     movieArray.push({
        //         name: apiData.data.listMovies.items[i].name,
        //         director: apiData.data.listMovies.items[i].director,
        //         year: apiData.data.listMovies.items[i].year,
        //         genre: apiData.data.listMovies.items[i].genre,
        //         rating: apiData.data.listMovies.items[i].rating,
        //     });
        // }
        // console.log(movieArray);

        setMovies(apiData.data.listMovies.items); // TODO: not sure why, but we need this here
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