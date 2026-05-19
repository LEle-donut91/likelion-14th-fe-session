import React, { useContext } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TvContext } from "../TvContext";

function MainBanner() {
    const { tvPrograms, loading, error } = useContext(TvContext)

    // 로딩/에러 상태 처리
    if (loading) return <div className="loader">로딩중...</div>
    if (error) return <div className="error">에러: {error}</div>

    const settings = {
        infinite: true, // 무한 캐러셀
        centerMode: true, // 가운데 정렬
        autoplay: true, // 자동 캐러셀
        draggable: false, // 드래그 할 수 없도록

        // centerMode 만으로는 가운데 정렬이 되지 않아서, 아래 코드 2줄 추가
        variableWidth: true,
        variableHeight: true
    };

    return (
        // 이미지 슬라이드(캐러셀)
        <div>
            <Slider {...settings}>
                {tvPrograms.map(tv => (
                    <div key={tv.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w1280${tv.backdrop_path}`}
                            alt={tv.title}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default React.memo(MainBanner);