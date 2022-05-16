import { Button, Modal } from 'react-bootstrap';

import { API } from 'aws-amplify';
import { createMovies } from '../graphql/mutations';

function DeleteMovieModal({movieToDelete, isDeleteModalOpen, setIsDeleteModalOpen}) {
   
    return (
        <Modal show={isDeleteModalOpen} onHide={e => setIsDeleteModalOpen(false)}>

            {/* Header */}
            <Modal.Header closeButton>
                <Modal.Title>Delete a Movie</Modal.Title>
            </Modal.Header>

            {/* Body */}
            <Modal.Body>
                Are you sure you wish to delete the following movie?
                <div>(Delete functionality still in progress)</div>
                {
                    movieToDelete !== undefined && (
                        <div style={{fontSize: "x-large", textAlign: "center"}}>{movieToDelete.name}</div>
                    )
                }
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer>
                <Button variant="dark" onClick={e => setIsDeleteModalOpen(false)}>Never mind...</Button>
                <Button variant="dark" onClick={e => setIsDeleteModalOpen(false)}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteMovieModal;