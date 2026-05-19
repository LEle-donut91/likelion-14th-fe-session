import React from 'react';
import TvCard from "../components/TvCard";

function Kids() {
    return (
        <div>
            <h4>인기 키즈 프로그램</h4>
            <section>
                <TvCard />
            </section>
        </div>
    );
}
export default React.memo(Kids);

