import React from 'react';

function Footer() {
    // 검색 아이콘, 계정 아이콘 출처 표기
    return (
        <div>
            <br />
            <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Freepik - Flaticon</a>
            <br />
            <a href="https://www.flaticon.com/free-icons/account" title="account icons">Account icons created by Shashank Singh - Flaticon</a>
        </div>
    )
}

export default React.memo(Footer);
