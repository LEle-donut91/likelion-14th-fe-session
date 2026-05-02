import React, { useState, useContext } from "react";
import { MyContext } from "../Context";

function Form() {
    // context에서 addItem 함수만 사용 (LocalStorage 배열에 요소 추가하는 함수)
    const { addItem } = useContext(MyContext);

    const [mood, setMood] = useState(""); // 오늘 기분
    const [comment, setComment] = useState(""); // 오늘 일기 내용

    // 오늘 날짜 불러오기 (연.월.일)
    const today = new Date();
    const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}.`;

    // [기록하기] 버튼 클릭 시 호출되는 함수
    const handleSubmit = () => {
        // 기분 버튼을 클릭하지 않은 경우 alert
        if (!mood) {
            alert("오늘 기분을 선택해주세요!");
            return;
        }
        // 내용을 입력하지 않은 경우 alert
        if (!comment) {
            alert("내용을 입력해주세요!");
            return;
        }

        // item은 배열 요소 (dictionary 형태)
        const item = { formattedDate, mood, comment }
        addItem(item); // 배열에 item 추가
    };

    return (
        <div>
            <h4>오늘의 기분을 기록해보세요.</h4>
            <div>
                {/* 각각의 버튼 클릭 시, mood 업데이트 */}
                <button onClick={(e) => setMood("happy")}>😊</button>
                <button onClick={(e) => setMood("neutral")}>☹️</button>
                <button onClick={(e) => setMood("sad")}>😢</button>
            </div>

            {/* 사용자가 입력을 할 때마다, comment 업데이트 */}
            <input
                type="text"
                placeholder="오늘 있었던 일을 간단히 써보세요."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <br />

            {/* 버튼 클릭 시 handleSubmit 함수 호출 */}
            <button onClick={handleSubmit}>기록하기</button>
        </div>
    );
}

export default Form;
