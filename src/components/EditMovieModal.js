import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { updateMovies } from '../graphql/mutations';

const initialFormState = {
    name: '',
    director: '',
    year: '',
    genre: '',
    rating: '',
}

function EditMovieModal({selectedMovie, isEditModalOpen, setIsEditModalOpen, movies, setMovies}) {
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        if (selectedMovie !== undefined) { 
            setFormData({
                id:       selectedMovie?.id,
                name:     selectedMovie?.name,
                director: selectedMovie?.director,
                year:     selectedMovie?.year,
                genre:    selectedMovie?.genre,
                rating:   selectedMovie?.rating,
                _version: selectedMovie?._version,
            })
        }
    }, [selectedMovie])

    async function updateMovie() {
        if(inputValidation()) {
            await API.graphql({ query: updateMovies, variables: { input: formData } });

            // Update the displayed movies
            let newMoviesArray = movies.filter(movie => movie.id !== selectedMovie.id);
            newMoviesArray.push(formData);
            setMovies(newMoviesArray);

            // Revert & Close the Modal
            setFormData(initialFormState);
            setIsEditModalOpen(false);
        }
    }

    function inputValidation() {
        if(formData.name === "" ||
           formData.director === "" ||
           formData.year === "" ||
           formData.genre === "" ||
           formData.rating === "") {
            alert("You must fill out all movie fields");
            return false;
        }
        else if (formData.year < 1800 || formData.year > 2040){
            alert("Valid years are 1800 to 2040");
            return false;
        }
        return true;
    }

    return (
        <Modal show={isEditModalOpen} onHide={e => setIsEditModalOpen(false)}>

            {/* Header */}
            <Modal.Header closeButton>
                <Modal.Title>Edit Movie: {selectedMovie?.name}</Modal.Title>
            </Modal.Header>

            {/* Body */}
            <Modal.Body>
                Modify the fields to update, then click save!

                <Form>
                    {/* Name */}
                    <Form.Group as={Row} className="mb-3" controlId="movieName">
                        <Form.Label column sm="3">Name</Form.Label>
                        <Col>
                            <Form.Control column
                                value={formData?.name}
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
                                value={formData?.director}
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
                                value={formData?.year}
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
                                value={formData?.genre}
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
                                value={formData?.rating}
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
                <Button variant="dark" onClick={updateMovie}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditMovieModal;