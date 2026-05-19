import React from 'react';
import TvCard from "../components/TvCard";

function Drama() {
    return (
        <div>
            <h4>인기 드라마</h4>
            <section>
                <TvCard />
            </section>
        </div>
    );
}
export default React.memo(Drama);

