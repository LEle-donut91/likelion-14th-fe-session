// 행복, 놀람, 슬픔, 화남, 따분 -> 버튼 클릭 시, alert 알림
// comment: 오늘 기분 설명
// face: 😊, 😮, 😭, 😠, 😒
// mood: 행복, 놀람, 슬픔, 화남, 따분
function Mood({ comment, face, mood }) {
    return (
        <div>
            <button onClick={() => alert(comment)}>{face}</button>
            <p>{mood}</p>
        </div>
    );
}

export default Mood;
