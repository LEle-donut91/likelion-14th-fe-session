function App() {
  /* 1. 객체 선언 */
  // 아침 시간 루틴
  const morning = {
    time: '아침 | 08:00',
    topic: '스트레칭하기',
    comment: '기분 좋게 하루를 시작해요!'
  };

  // 점심 시간 루틴
  const lunch = {
    time: '점심 | 13:00',
    topic: '친구랑 점심 먹기',
    comment: '오늘은 제육덮밥!'
  };

  // 저녁 시간 루틴
  const dinner = {
    time: '저녁 | 20:00',
    topic: 'React 공부하기',
    comment: '프론트엔드 개발자로 성공하자!'
  };

  /* 2. 3개의 객체 -> routines 배열에 저장 */
  const routines = [morning, lunch, dinner];

  /* 3. 버튼 누르면, alert를 통해 "나의 이름 + 응원 메시지" 확인 가능 */
  const name = "이석현"; // 내 이름
  const cheering = () => { // 응원 버튼
    alert(`${name}님, 오늘 하루도 파이팅 ❣`);
  };

  return (
    // 3개의 카드를 담는 부모 div
    <div style={{
      padding: '10px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center', // 자식인 h2 가운데 정렬
      minHeight: '100%' // 세로로 전체를 꽉 채우기
    }}>

      <h2 style={{ color: '#4a90e2', margin: '10px' }}>
        📅 나의 하루 루틴
      </h2>

      {/* 4. 리스트 렌더링 : map()으로 3개의 루틴 카드 반복 출력 */}
      {routines.map((routine, index) => ( // routine -> routines 배열 요소, index -> routines 배열 요소의 인덱스 값
        <div key={index} style={{
          padding: '10px 30px',
          fontFamily: 'Pretendard, sans-serif',
          backgroundColor: '#fff',
          borderRadius: '10px',
          maxWidth: '600px',
          margin: '20px auto',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          textAlign: 'start' /* 자식 요소 왼쪽 정렬 */
        }}>

          {/* 5. routine 객체의 속성 (time, topic, comment) 값 출력 */}
          {/* 시간대 */}
          <h3 style={{ color: '#333' }}>
            {routine.time}
          </h3>

          {/* 하는 일 */}
          <p style={{ color: '#333', fontWeight: 'bold' }}>
            {routine.topic} 
          </p>

          {/* 설명 */}
          <p style={{ color: '#7d7d7d' }}>
            {routine.comment}
          </p>

          {/* 6. 조건부 렌더링 (점심 루틴에만 강조 문구 추가) */}
          {routine.time.includes("점심") ? (
            <p style={{ color: '#ee9014' }}>
              🌟점심은 꼭 챙겨 먹어요!
            </p>
          ) : (
            "" // 아침 or 저녁 -> 아무것도 출력 X
          )}

        </div>
      ))}

      {/* 7. 버튼 클릭 이벤트 처리 : 응원 메시지 alert 띄우기 */}
      <button onClick={cheering} style={{
        margin: '10px',
        padding: '12px 24px',
        backgroundColor: '#4a90e2',
        color: '#fff',
        borderRadius: '25px',
        border: 'none', // 버튼 테두리 선 지우기
        cursor: 'pointer', // 마우스 오버 -> 커서 모양 바뀜
        fontSize: '16px',
        boxShadow: '0 4px 8px rgba(74, 144, 226, 0.3)'
      }}>
        오늘 루틴 응원하기💪
      </button>
    </div>
  );
}

export default App;
