import { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import { API } from 'aws-amplify';
import { createMovies } from '../graphql/mutations';

const initialFormState = {
    name: '',
    director: '',
    year: '',
    genre: '',
    rating: '',
}

function AddMovieModal({isAddModalOpen, setIsAddModalOpen}) {
    const [formData, setFormData] = useState(initialFormState)

    async function saveMovie() {
        if(inputValidation()) {
            await API.graphql({ query: createMovies, variables: { input: formData } });
            setFormData(initialFormState);
            setIsAddModalOpen(false);
        }
    }

    function inputValidation() {
        if(formData.name === "" || formData.year === "") {
            alert("Name and year are required for every movie")
            return false;
        }
        else if (formData.year < 1800 || formData.year > 2040){
            alert("Make sure to enter a valid year")
            return false;
        }
        return true;
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
                                value={formData.name}
                                type="text"
                                placeholder="Name"
                                onChange={e => setFormData({ ...formData, 'name': e.target.value})}
                            />
                        </Col>
                    </Form.Group>

                    {/* Director */}
                    <Form.Group as={Row} className="mb-3" controlId="movieDirector">
                        <Form.Label column sm="3">Director</Form.Label>
                        <Col>
                            <Form.Control column
                                value={formData.director}
                                type="text"
                                placeholder="Director"
                                onChange={e => setFormData({ ...formData, 'director': e.target.value})}
                            />
                        </Col>
                    </Form.Group>

                    {/* Year */}
                    <Form.Group as={Row} className="mb-3" controlId="movieYear">
                        <Form.Label column sm="3">Release Year</Form.Label>
                        <Col>
                            <Form.Control column
                                value={formData.year}
                                type="number"
                                placeholder={2000}
                                onChange={e => setFormData({ ...formData, 'year': e.target.value})}
                            />
                        </Col>
                    </Form.Group>

                    {/* Genre */}
                    <Form.Group as={Row} className="mb-3" controlId="movieGenre">
                        <Form.Label column sm="3">Genre</Form.Label>
                        <Col>
                            <Form.Control column
                                value={formData.genre}
                                type="text"
                                placeholder="Action"
                                onChange={e => setFormData({ ...formData, 'genre': e.target.value})}
                            />
                        </Col>
                    </Form.Group>

                    {/* Rating */}
                    <Form.Group as={Row} className="mb-3" controlId="movieRating">
                        <Form.Label column sm="3">Rating</Form.Label>
                        <Col>
                            <Form.Control column
                                value={formData.rating}
                                type="number"
                                placeholder={5}
                                onChange={e => setFormData({ ...formData, 'rating': e.target.value})}
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