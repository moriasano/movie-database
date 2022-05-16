import '../styles/Home.css';
import SearchMovies from './SearchMovies';


function Home() {
    return (
        <div className="body">
            <style>
                {/* Import Custom Font */}
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap');
                </style>
            </style>

            <div className='spacing'/>
            <h1>The Movie Database</h1>
            <div className='spacing'/>
            <SearchMovies />
        </div>
    );
}

export default Home;