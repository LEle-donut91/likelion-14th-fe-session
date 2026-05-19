import React from 'react';
import MovieCard from '../components/MovieCard';

function MoviePlus() {

    return (
        <div>
            <h4>인기 영화플러스</h4>
            <section>
                <MovieCard />
            </section>
        </div>
    );
}
export default React.memo(MoviePlus);
