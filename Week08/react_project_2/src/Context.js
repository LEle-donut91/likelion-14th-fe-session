import { createContext, useState, useEffect } from "react";

// context 생성 (MyContext)
export const MyContext = createContext();

// MyProvider: 데이터를 전달해주는 주체
// children: MyProvider 내부의 자식 컴포넌트 (Form, History, Detail)
export const MyProvider = ({ children }) => {

    // data: 감정 기록 배열 (dictionary 배열)
    const [data, setData] = useState([]);

    // 초기 렌더링 시에, localStorage에서 data 불러옴
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("data")) || [];
        setData(stored);
    }, []);

    // 사용자 입력 후 [기록하기] 버튼을 눌러서 data가 변경되면, localStorage에 저장
    useEffect(() => {
        if (data.length === 0) return; // 초기 상태(data가 빈 배열)인 경우 -> 이때는 저장 X
        localStorage.setItem("data", JSON.stringify(data));
    }, [data]);

    // LocalStorage 배열에 요소 추가하는 함수
    const addItem = (item) => {
        setData((prev) => [...prev, item]);
    };

    return (
        // Context Provider를 통해 data, addItem을 전역으로 전달
        <MyContext.Provider value={{ data, addItem }}>
            {/* Context 안에 위치할 자식 컴포넌트들 */}
            {children}
        </MyContext.Provider>
    );
}
