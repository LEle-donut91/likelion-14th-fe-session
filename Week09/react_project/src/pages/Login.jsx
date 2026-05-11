import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import netflix from '../img/netflix.png'
import { useTranslation } from "react-i18next";

function Login({ onLogin }) {
  const [account, setAccount] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { t } = useTranslation(); // useTranslation Hook

  // "다음" 버튼 클릭 시 호출
  const handleSubmit = (e) => {
    e.preventDefault();

    // 사용자가 입력한 계정 정보가 없는 경우, 안내 문구 출력
    if (!account.trim()) {
      setError(t("loginError"));
      return;
    }

    // 로그인 진행
    onLogin(account);
    navigate('/home', { replace: true }); // 홈(/home)으로 리디렉션
  };

  return (
    <div className="login-page">
      {/* 넷플릭스 로고 (홈으로 이동) */}
      <Link to={"/"}>
        <img src={netflix} alt={t("netflixLogo")} />
      </Link>

      <main className="d-flex justify-content-center align-items-start">
        <div className="login-box">
          {/* 로그인 안내 문구 */}
          <h4 className="text-white fw-bold mb-2">{t("loginH4")}</h4>
          <p className="text-secondary small mb-4">{t("loginP")}</p>

          {/* 로그인 정보 입력 폼 */}
          <form onSubmit={handleSubmit} className="auth-form">
            {/* 이메일 주소 or 휴대폰 번호 입력 Input */}
            <input className="form-control bg-dark text-white border-danger mb-2"
              id="account"
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder={t("loginInput")}
            />

            {error && (
              <div className="text-danger small mb-3">
                {error}
              </div>
            )}

            {/* 다음 버튼 (로그인 완료) */}
            <button
              type="submit"
              className="btn btn-danger w-100 fw-bold mb-5"
            >
              {t("loginBtn")}
            </button>
          </form>

          {/* 아코디언 UI 구현 (섹션 확장 및 축소) */}
          <div className="accordion accordion-flush" id="faqAccordion">
            <div className="accordion-item bg-transparent border-0">
              <h2 className="accordion-header">
                {/* 고객 지원 버튼 */}
                <button
                  className="accordion-button collapsed bg-transparent text-white shadow-none px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  {t("accordionHeader")}
                </button>
              </h2>

              {/* 확장 및 축소될 섹션 */}
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                {/* 아코디언 body 부분 */}
                <div className="accordion-body text-secondary px-0">
                  {t("accordionBodyOne")}<br />{t("accordionBodyTwo")}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>

  );
}

export default Login;
