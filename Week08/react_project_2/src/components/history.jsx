import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from "../Context";


function History() {
    // Context Provider가 전달해준 데이터 중 data(LocalStorage에 저장한 배열)
    const { data } = useContext(MyContext);

    return (
        <nav>
            <h3>기록한 감정 목록</h3>
            {/* item: LocalStorage에 저장한 배열의 요소 하나하나 */}
            {/* id: 배열의 각 요소 인덱스 */}
            {/* 기록한 감정 목록 리스트 모두 출력 */}
            {data.map((item, id) => (
                <ul>
                    <li key={id}>
                        <Link to={`/detail/${id}`} className='history-link'>
                            [{item.formattedDate}] {item.mood} - {item.comment}
                            <br />
                        </Link>
                    </li>
                </ul>
            ))}

        </nav>
    );

}

export default History;