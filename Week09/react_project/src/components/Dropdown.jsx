import React, { useState } from "react";
import i18n from "../language/i18n";

// 언어 변경 드롭다운 컴포넌트
function Dropdown({ language, setLanguage }) {
    const list = ["한국어", "English"]; // 언어 종류 2가지

    const [showOptions, setShowOptions] = useState(false); // 현재 드롭다운 메뉴가 열려 있는지 (초기값은 닫혀 있도록 false 설정) 

    // 드롭다운 메뉴에서 언어 선택 시
    const handleOnChangeSelectValue = (selected) => {
        setLanguage(selected); // 현재 드롭다운에 표시된 언어 상태 변경

        setShowOptions(false); // 드롭다운 메뉴 닫기

        // 현재 선택된 언어 적용
        if (selected === "한국어") {
            i18n.changeLanguage("ko");
        } else {
            i18n.changeLanguage("en");
        }
    };

    return (
        <div className="dropdown">
            {/* 드롭다운 버튼 (현재 선택된 언어 표시) */}
            <button
                className="btn language-btn dropdown-toggle"
                onClick={() => setShowOptions((prev) => !prev)}
            >
                {language}
            </button>

            {/* 드롭다운 메뉴 리스트 */}
            <ul className={`dropdown-menu ${showOptions ? "show" : ""}`}>
                {list.map((data, index) => (
                    <li className="dropdown-item"
                        key={index}
                        value={data}
                        onClick={() => handleOnChangeSelectValue(data)}
                    >
                        {data}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dropdown;
