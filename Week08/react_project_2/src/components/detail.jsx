import { useContext } from "react";
import { useParams } from "react-router-dom"
import { MyContext } from "../Context";
import { Link } from 'react-router-dom';


function Detail() {
    const { data } = useContext(MyContext); // 딕셔너리 배열
    const { id } = useParams(); // 배열 요소의 인덱스

    // 현재 배열 요소의 [날짜, 기분, 내용]
    const [date, mood, comment] = [data[id].formattedDate, data[id].mood, data[id].comment];

    return (
        <div>
            <h3>기록 상세</h3>
            <p>날짜: {date}</p>
            <p>기분: {mood}</p>
            <p>내용: {comment}</p>

            {/* [목록으로] 버튼 클릭 시, history(감정 목록) 페이지로 이동 */}
            <nav>
                <Link to="/history">
                    <button className="btn-to-history">목록으로</button>
                </Link>
            </nav>
        </div>
    )
}

export default Detail;