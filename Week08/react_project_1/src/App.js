import React from "react";
import Profile from "./components/profile";
import Mood from "./components/mood";
import Today from "./components/today";

function App() {
  return (
    <div className="container">
      <Profile />

      {/* Mood 컴포넌트 (버튼 클릭 시, alert 알림) */}
      <div className="mood-btns">
        <Mood comment={"정말 행복해요💓"} face={"😊"} mood={"행복"} />
        <Mood comment={"와, 놀랐어요💥"} face={"😮"} mood={"놀람"} />
        <Mood comment={"너무 슬퍼요💦"} face={"😭"} mood={"슬픔"} />
        <Mood comment={"진짜 화나요💢"} face={"😠"} mood={"화남"} />
        <Mood comment={"흠, 따분해요💤"} face={"😒"} mood={"따분"} />
      </div>

      {/* Today 컴포넌트 (오늘 일기 - 날짜, 날씨, 코멘트) */}
      <div className="today-list">
        <Today date={"06/10"} weather={"맑음☀️"} comment={"오늘은 집에서 푹 쉬었다!"} />
        <Today date={"06/11"} weather={"흐림🌥️"} comment={"오늘은 멋사 스터디를 했다!"} />
        <Today date={"06/12"} weather={"폭우🌧️"} comment={"오늘은 학교에서 열심히 수업을 들었다!"} />
        <Today date={"06/13"} weather={"번개⚡"} comment={"오늘은 컨디션이 별로다! 그냥 자야겠다."} />
      </div>
    </div>
  );
}

export default App;
