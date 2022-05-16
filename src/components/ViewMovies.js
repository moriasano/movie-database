import '../styles/ViewMovies.css';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import DeleteMovieModal from './DeleteMovieModal';

function ViewMovies({movies, filter}) {
    const [sortBy, setSortBy] = useState('name');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [movieToDelete, setMovieToDelete] = useState()

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
                        <th onClick={() => setSortBy('name')}>
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
                                        setIsDeleteModalOpen={setIsDeleteModalOpen}
                                        setMovieToDelete={setMovieToDelete}
                                    />
                        }
                        return <></>
                    })}
                </tbody>
            </Table>

            <DeleteMovieModal movieToDelete={movieToDelete} isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} />
        </>
    );
}

function MovieRow({movie, filter, key, setIsDeleteModalOpen, setMovieToDelete}) {
    
    function deleteMovie() {
        setMovieToDelete(movie);
        setIsDeleteModalOpen(true);
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
            <td onClick={() => deleteMovie()}>🗑</td>
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