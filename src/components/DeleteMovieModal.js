import { Button, Modal } from 'react-bootstrap';

import { API } from 'aws-amplify';
import { deleteMovies } from '../graphql/mutations';

function DeleteMovieModal({selectedMovie, isDeleteModalOpen, setIsDeleteModalOpen, movies, setMovies}) {

    async function deleteMovie() {
        var movieToDelete = {
            id: selectedMovie?.id,
            _version: selectedMovie?._version,
        }
        await API.graphql({ query: deleteMovies, variables: { input: movieToDelete }});

        // Remove from the page without re-rendering
        const newMoviesArray = movies.filter(movie => movie.id !== selectedMovie.id);
        setMovies(newMoviesArray);
        setIsDeleteModalOpen(false);
    }
   
    return (
        <Modal show={isDeleteModalOpen} onHide={e => setIsDeleteModalOpen(false)}>

            {/* Header */}
            <Modal.Header closeButton>
                <Modal.Title>Delete a Movie</Modal.Title>
            </Modal.Header>

            {/* Body */}
            <Modal.Body>
                <div>Are you sure you wish to delete the following movie?</div>
                {selectedMovie !== undefined && (
                    <div style={{fontSize: "x-large", textAlign: "center"}}>{selectedMovie.name}</div>
                )}
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer>
                <Button variant="dark" onClick={e => setIsDeleteModalOpen(false)}>Never mind...</Button>
                {/* <Button variant="dark" onClick={() => deleteMovie(selectedMovie)}>Confirm</Button> */}
                <Button variant="dark" onClick={deleteMovie}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteMovieModal;