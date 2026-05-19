import React from 'react';
import TvCard from "../components/TvCard";

function Entertain() {
    return (
        <div>
            <h4>인기 예능</h4>
            <section>
                <TvCard />
            </section>
        </div>
    );
}
export default React.memo(Entertain);

