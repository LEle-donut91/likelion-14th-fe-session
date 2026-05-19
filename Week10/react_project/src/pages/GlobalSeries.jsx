import React from 'react';
import TvCard from "../components/TvCard";

function GlobalSeries() {
    return (
        <div>
            <h4>인기 해외 시리즈</h4>
            <section>
                <TvCard />
            </section>
        </div>
    );
}
export default React.memo(GlobalSeries);

