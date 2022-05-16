import '../styles/Home.css';
import SearchMovies from './SearchMovies';


function Home() {
    return (
        <div className="body">
            <style>
                {/* Import Custom Font */}
                @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap');
            </style>

            <div className='spacing'/>
            <h1>The Movie Database</h1>
            <div className='spacing'/>
            <SearchMovies />
        </div>
    );
}

export default Home;