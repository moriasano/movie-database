import '../styles/Home.css';
import SearchMovies from './SearchMovies';


function Home() {
    return (
        <div className="body">
            
            <h1>Search for Movies!</h1>
            <SearchMovies />
        </div>
    );
}

export default Home;