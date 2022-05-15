import '../styles/ViewMovies.css';
import { Table } from 'react-bootstrap';

function ViewMovies({movies, filter}) {

    movies = [
        {
            name: "mori",
            director: "mori",
            year: "mori",
            genre: "mori",
            rating: "5"
        },
        {
            name: "taiyp",
            director: "taiyp",
            year: "taiyp",
            genre: "poop",
            rating: "3"
        }
    ]

    return (
        <Table hover borderless className='table'>
            {/* Column Names */}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Director</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Rating</th>
                </tr>
            </thead>

            {/* Movies List */}
            <tbody>
                {movies.map((movie) => {
                    if (movie.name.includes(filter) ||
                        movie.director.includes(filter) ||
                        movie.genre.includes(filter)) {
                        return <MovieRow movie={movie} filter={filter} />
                    }
                    return <></>
                })}
            </tbody>

        </Table>
    );
}

function MovieRow({movie, filter}) {
    return (
        <tr>
            <td><HighlightText text={movie.name} highlightStr={filter}/></td>
            <td>{movie.director}</td>
            <td>{movie.year}</td>
            <td>{movie.genre}</td>

            {/* Rating */}
            <td>
                {Array.from({length: movie.rating }, (_, i) => (
                    <>⭐️</>
                ))}
            </td>
        </tr>
    );
}

function HighlightText({text, highlightStr}) {
    if(highlightStr.length === 0) {
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