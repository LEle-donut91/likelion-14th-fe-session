import React from 'react';
import TvCard from "../components/TvCard";

function Animation() {
    return (
        <div>
            <h4>인기 애니메이션</h4>
            <section>
                <TvCard />
            </section>
        </div>
    );
}
export default React.memo(Animation);

