import React from 'react';
import MovieCard from '../components/MovieCard';

function Movie() {

    return (
        <div>
            <h4>인기 영화</h4>
            <section>
                <MovieCard />
            </section>
        </div>
    );
}
export default React.memo(Movie);
