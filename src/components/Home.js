import '../styles/Home.css';
import SearchMovies from './SearchMovies';


function Home() {
    return (
        <div className="body">
            
            <h1>The Movie Database</h1>
            <SearchMovies />
        </div>
    );
}

export default Home;