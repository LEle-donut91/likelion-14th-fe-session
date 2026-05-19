import React from 'react';
import MainBanner from "../components/MainBanner";
import MovieCard from "../components/MovieCard";

function Home() {
    return (
        <div>
            {/* 메인 배너 이미지 */}
            <main>
                <MainBanner className='main-banner' />
            </main>

            <h4> 믿고 보는 웨이브 에디터 추천작</h4>

            {/* 섹션 카드 이미지 */}
            <section>
                <MovieCard />
            </section>
        </div>
    );
}
export default React.memo(Home);

