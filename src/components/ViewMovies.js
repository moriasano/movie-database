import '../styles/ViewMovies.css';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

function ViewMovies({movies, filter}) {
    const [sortBy, setSortBy] = useState('name');

    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    return (
        <Table hover borderless className='table'>
            {/* Column Names */}
            <thead>
                <tr>
                    <th onClick={() => setSortBy('name')}>Name</th>
                    <th onClick={() => setSortBy('director')}>Director</th>
                    <th onClick={() => setSortBy('year')}>Year</th>
                    <th onClick={() => setSortBy('genre')}>Genre</th>
                    <th onClick={() => setSortBy('rating')}>Rating</th>
                </tr>
            </thead>

            {/* Movies List */}
            <tbody>
                {movies.length > 0 && movies.sort(dynamicSort(sortBy)).map(movie => {
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