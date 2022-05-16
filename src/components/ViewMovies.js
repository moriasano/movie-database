import '../styles/ViewMovies.css';
import { Table } from 'react-bootstrap';

function ViewMovies({movies, filter}) {
    // movies = [
    //     {
    //         name: "Mori",
    //         director: "Momomomo",
    //         year: "mori",
    //         genre: "mori",
    //         rating: "5"
    //     },
    //     {
    //         name: "taiyp",
    //         director: "taiyp",
    //         year: "taiyp",
    //         genre: "taiyo",
    //         rating: "3"
    //     }
    // ]

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
                {movies.length > 0 && movies.map(movie => {
                    console.log(movie)
                    if (movie.name.includes(filter) ||
                        movie.director.includes(filter) ||
                        movie.genre.includes(filter)) {
                        return <MovieRow movie={movie} filter={filter} key={movie.id} />
                    }
                    return <></>
                })}
            </tbody>
        </Table>
    );
}

function MovieRow({movie, filter, key}) {
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