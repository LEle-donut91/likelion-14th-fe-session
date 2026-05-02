// date: 오늘 날짜
// weather: 오늘 날씨
// comment: 오늘 일기 코멘트
function Today({ date, weather, comment }) {
    return (
        <div className="today">
            <h4>{date}</h4>
            <p>{weather}</p>
            <p>{comment}</p>
        </div>
    );
}

export default Today;
