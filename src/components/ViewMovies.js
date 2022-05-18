import '../styles/ViewMovies.css';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import DeleteMovieModal from './DeleteMovieModal';
import EditMovieModal from './EditMovieModal';

function ViewMovies({movies, setMovies, filter}) {
    const [sortBy, setSortBy] = useState('name');
    const [selectedMovie, setSelectedMovie] = useState()
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // Sort the displayed table
    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    return (
        <>
            <Table hover borderless className='table'>
                {/* Column Names */}
                <thead>
                    <tr>
                        <th onClick={() => setSortBy('name')} width="25%">
                            {sortBy === "name" && (
                                <>🔻</>
                            )}
                            Name
                        </th>
                        <th onClick={() => setSortBy('director')}>
                            {sortBy === "director" && (
                                <>🔻</>
                            )}
                            Director
                        </th>
                        <th onClick={() => setSortBy('year')}>
                            {sortBy === "year" && (
                                <>🔻</>
                            )}
                            Year
                        </th>
                        <th onClick={() => setSortBy('genre')}>
                            {sortBy === "genre" && (
                                <>🔻</>
                            )}
                            Genre
                        </th>
                        <th onClick={() => setSortBy('rating')}>
                            {sortBy === "rating" && (
                                <>🔻</>
                            )}
                            Rating
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {/* Movies List */}
                <tbody>
                    {movies.length > 0 && movies.sort(dynamicSort(sortBy)).map(movie => {
                        console.log(movie)
                        if (movie.name.includes(filter) ||
                            movie.director.includes(filter) ||
                            movie.genre.includes(filter)) {
                            return <MovieRow
                                        movie={movie}
                                        filter={filter}
                                        key={movie.id}
                                        setSelectedMovie={setSelectedMovie}
                                        setIsEditModalOpen={setIsEditModalOpen}
                                        setIsDeleteModalOpen={setIsDeleteModalOpen}
                                    />
                        }
                        return <></>
                    })}
                </tbody>
            </Table>

            <DeleteMovieModal selectedMovie={selectedMovie} isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} movies={movies} setMovies={setMovies} />
            {/* <EditMovieModal selectedMovie={selectedMovie} isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} /> */}
        </>
    );
}

function MovieRow({movie, filter, key, setSelectedMovie, setIsEditModalOpen, setIsDeleteModalOpen}) {
    
    function deleteMovie() {
        setSelectedMovie(movie);
        setIsDeleteModalOpen(true);
    }

    function editMovie() {
        setSelectedMovie(movie);
        setIsEditModalOpen(true);
    }

    return (
        <tr key={key}>
            <td>
                <HighlightText text={movie.name} highlightStr={filter}/>
            </td>
            <td>
                <HighlightText text={movie.director} highlightStr={filter}/>
            </td>
            <td>
                {movie.year}
            </td>
            <td>
                <HighlightText text={movie.genre} highlightStr={filter}/>
            </td>

            {/* Rating */}
            <td>
                {Array.from({length: movie.rating }, (_, i) => (
                    <>⭐️</>
                ))}
            </td>

            {/* Actions */}
            <td>
                {/* <span className="clickable" onClick={() => editMovie()}>✏️</span> */}
                <span className="clickable" onClick={() => alert("Edit Movie in Progress")}>✏️</span> 
                &nbsp;&nbsp;&nbsp;
                <span className="clickable" onClick={() => deleteMovie()}>🗑</span>
            </td>
            
        </tr>
    );
}

function HighlightText({text, highlightStr}) {
    if(highlightStr.length === 0 ||
        !text.includes(highlightStr)) {
        return <>{text}</>
    }

    var normal = text.split(highlightStr);
    return (
        <>
            <span>{normal[0]}</span>
            <span className='highlight'>{highlightStr}</span>
            <span>{normal[1]}</span>
        </>
    );
}

export default ViewMovies;