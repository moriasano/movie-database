import { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function AddMovieModal({isAddModalOpen, setIsAddModalOpen}) {
    const [name, setName] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");

    function saveMovie() {
        alert(name);
    }

    return (
        <Modal show={isAddModalOpen} onHide={e => setIsAddModalOpen(false)}>

            {/* Header */}
            <Modal.Header closeButton>
                <Modal.Title>Add a Movie</Modal.Title>
            </Modal.Header>

            {/* Body */}
            <Modal.Body>
                Fill out the fields for the movie you would like to add

                <Form>
                    {/* Name */}
                    <Form.Group as={Row} className="mb-3" controlId="movieName">
                        <Form.Label column sm="3">Name</Form.Label>
                        <Col>
                            <Form.Control column
                                value={name}
                                type="text"
                                placeholder="Name"
                                onChange={ e => setName(e.target.value) }
                            />
                        </Col>
                    </Form.Group>

                    {/* Director */}
                    <Form.Group as={Row} className="mb-3" controlId="movieDirector">
                        <Form.Label column sm="3">Director</Form.Label>
                        <Col>
                            <Form.Control column
                                value={director}
                                type="text"
                                placeholder="Director"
                                onChange={ e => setDirector(e.target.value) }
                            />
                        </Col>
                    </Form.Group>

                    {/* Year */}
                    <Form.Group as={Row} className="mb-3" controlId="movieYear">
                        <Form.Label column sm="3">Release Year</Form.Label>
                        <Col>
                            <Form.Control column
                                value={year}
                                type="number"
                                placeholder={2000}
                                onChange={ e => setYear(e.target.value) }
                            />
                        </Col>
                    </Form.Group>

                    {/* Genre */}
                    <Form.Group as={Row} className="mb-3" controlId="movieGenre">
                        <Form.Label column sm="3">Genre</Form.Label>
                        <Col>
                            <Form.Control column
                                value={genre}
                                type="text"
                                placeholder="Action"
                                onChange={ e => setGenre(e.target.value) }
                            />
                        </Col>
                    </Form.Group>

                    {/* Rating */}
                    <Form.Group as={Row} className="mb-3" controlId="movieRating">
                        <Form.Label column sm="3">Rating</Form.Label>
                        <Col>
                            <Form.Control column
                                value={rating}
                                type="number"
                                placeholder={5}
                                onChange={ e => setRating(e.target.value) }
                            />
                        </Col>
                    </Form.Group>

                </Form>
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer>
                <Button variant="dark" onClick={saveMovie}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddMovieModal;