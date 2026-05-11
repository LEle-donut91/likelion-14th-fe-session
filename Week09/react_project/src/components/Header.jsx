import { Link, NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import netflix from '../img/netflix.png'
import { useTranslation } from "react-i18next";

function Header({ language, setLanguage, isAuthenticated, user, onLogout }) {
  const { t } = useTranslation(); // useTranslation Hook

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Netflix 로고 */}
        <div className="navbar-brand">
          <Link to="/home">
            <img src={netflix} alt={t("netflixLogo")} />
          </Link>
        </div>

        {/* 우측 Navbar */}
        <div className="navbar-nav">
          {/* 언어 설정 드롭다운 */}
          <Dropdown
            language={language}
            setLanguage={setLanguage}
          />
          {/* 로그아웃 버튼 */}
          {isAuthenticated ? (
            <>
              <div className="d-flex align-items-right">
                <button
                  onClick={onLogout}
                  className="btn text-light"
                >
                  {t("btnToLogout")}
                </button>
              </div>
            </>
          ) : (
            // 로그인 Link
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link active text-light" : "nav-link text-light"
              }
            >
              {t("linkToLogin")}
            </NavLink>
          )}
          {/* 마이페이지 */}
          <NavLink
            to="/my_page"
            className={({ isActive }) =>
              isActive ? "nav-link active text-light" : "nav-link text-light"
            }
          >
            {t("linkToMyPage")}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
