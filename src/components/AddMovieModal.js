import { Button, Form, FormControl, Modal } from 'react-bootstrap';

function AddMovieModal({isAddModalOpen, setIsAddModalOpen}) {

    return (
        <Modal show={isAddModalOpen} onHide={e => setIsAddModalOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add a Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>Add a Movie</Modal.Body>
            <Modal.Footer>
                <Button variant="dark">Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddMovieModal;