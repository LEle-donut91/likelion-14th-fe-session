import React, { useState, useEffect } from "react";

function Profile({ img, mood }) {
    const [todayMood, setTodayMood] = useState(mood);

    const toggleMood = () => {
        setTodayMood((prev) => (prev == "행복해" ? "슬퍼" : "행복해"))
    };

    useEffect(() => {
        console.log("오늘의 나의 기분은 좋을 거야! 행복하자 😊");

    }, []);

    // "기분 바꾸기" 버튼 클릭 시 -> setTodayMood 호출
    return (
        <div className="profile">
            <h2>내 프로필</h2>
            <div className="card">
                <div className="img-container">
                    <img src="img/image.png" />
                </div>
                <h3>오늘의 기분: {todayMood}</h3>
                <button onClick={toggleMood}>기분 바꾸기</button>
            </div>
        </div>
    );
}

export default Profile;
