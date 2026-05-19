import React from 'react';
import { NavLink } from 'react-router-dom';
import wavveLogo from '../img/wavve_logo.png'
import accountIcon from '../img/account_icon.png'
import searchIcon from '../img/search_icon.png'

function Header() {
    return (
        <nav>
            <div className='header-container'>
                {/* wavve 로고 */}
                <NavLink to="/">
                    <img className='wavve-logo' src={wavveLogo} alt='wavve 로고' />
                </NavLink>

                {/* 예능 */}
                <NavLink className={'header-nav-link'} to="/entertain">
                    <h4>예능</h4>
                </NavLink>

                {/* 드라마 */}
                <NavLink className={'header-nav-link'} to="/drama">
                    <h4>드라마</h4>
                </NavLink>

                {/* 영화 */}
                <NavLink className={'header-nav-link'} to="/movie">
                    <h4>영화</h4>
                </NavLink>

                {/* 애니 */}
                <NavLink className={'header-nav-link'} to="/animation">
                    <h4>애니</h4>
                </NavLink>

                {/* 해외 시리즈 */}
                <NavLink className={'header-nav-link'} to="/global_series">
                    <h4>해외시리즈</h4>
                </NavLink>

                {/* 시사 교양 */}
                <NavLink className={'header-nav-link'} to="/refine">
                    <h4>시사교양</h4>
                </NavLink>

                {/* 키즈 */}
                <NavLink className={'header-nav-link'} to="/kids">
                    <h4>키즈</h4>
                </NavLink>

                {/* 영화플러스 */}
                <NavLink className={'header-nav-link'} to="/movie_plus">
                    <h4>영화플러스</h4>
                </NavLink>

                {/* LIVE */}
                <NavLink className={'header-nav-link'} to="/live">
                    <h4>LIVE</h4>
                </NavLink>

                {/* 검색 NavLink, 계정 NavLink */}
                <div className='header-icon-container'>
                    <NavLink>
                        <img className='header-icon' src={searchIcon} alt='검색 아이콘'></img>
                    </NavLink>
                    <NavLink>
                        <img className='header-icon' src={accountIcon} alt='계정 아이콘'></img>
                    </NavLink>
                </div>

            </div>
        </nav>
    );
}

export default React.memo(Header);
