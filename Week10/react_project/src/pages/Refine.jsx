import React from 'react';
import TvCard from '../components/TvCard';

function Refine() {
    return (
        <div>
            <h4>인기 시사교양</h4>
            <section>
                <TvCard />
            </section>
        </div>
    );
}

export default React.memo(Refine);

