import { Button, Modal } from 'react-bootstrap';

import { API } from 'aws-amplify';
import { deleteMovies } from '../graphql/mutations';

function DeleteMovieModal({movieToDelete, isDeleteModalOpen, setIsDeleteModalOpen, movies, setMovies}) {

    // TODO: need to get this API working.
    // Error: "Conflict Resolver Rejects Mutation"
    async function deleteMovie({ id }) {
        // const newMoviesArray = movies.filter(movie => movie.id !== id);
        // setMovies(newMoviesArray);
        await API.graphql({ query: deleteMovies, variables: { input: { id } }});
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
                {movieToDelete !== undefined && (
                    <div style={{fontSize: "x-large", textAlign: "center"}}>{movieToDelete.name}</div>
                )}
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer>
                <Button variant="dark" onClick={e => setIsDeleteModalOpen(false)}>Never mind...</Button>
                {/* <Button variant="dark" onClick={() => deleteMovie(movieToDelete)}>Confirm</Button> */}
                <Button variant="dark" onClick={() => alert("delete functionality in progress")}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteMovieModal;