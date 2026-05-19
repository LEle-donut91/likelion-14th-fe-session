import React from 'react';
import TvCard from "../components/TvCard";

function Live() {

    return (
        <div>
            <h4>인기 라이브</h4>
            <section>
                <TvCard />
            </section>
        </div>
    );
}
export default React.memo(Live);

