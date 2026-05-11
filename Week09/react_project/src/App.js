import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage.jsx';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false); // 로그인 여부
  const [user, setUser] = useState(null); // 사용자 정보
  const [language, setLanguage] = useState("한국어"); // 언어 설정

  // 로그인 성공 후 호출
  const login = (account) => {
    setIsAuthenticated(true);
    setUser({ account });
  };

  // 로그아웃 후 호출
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <BrowserRouter>
      <div>
        <div className="container main-content">
          <Routes>
            {/* 홈 */}
            <Route path="/" element={
              <div>
                <Header
                  language={language}
                  setLanguage={setLanguage}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  onLogout={logout} />
                <Home />
              </div>
            } />

            {/* 홈페이지 */}
            <Route path="/home"
              element={
                <div>
                  {/* Header 컴포넌트 */}
                  <Header
                    language={language}
                    setLanguage={setLanguage}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    onLogout={logout} />
                  {/* Home 컴포넌트 */}
                  <Home />
                </div>
              } />

            {/* 로그인 페이지 */}
            <Route
              path="/login"
              element={
                // Login 컴포넌트
                <Login onLogin={login} />
              }
            />

            {/* 마이페이지 */}
            <Route
              path='/my_page'
              element={
                // 로그인 전에 접근 시, 로그인 페이지(/login)으로 강제 이동
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Header language={language} setLanguage={setLanguage} isAuthenticated={isAuthenticated} user={user} onLogout={logout} />
                  <MyPage user={user} />
                </ProtectedRoute>
              }
            >
            </Route>

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Footer 부분 */}
        <Footer
          language={language}
          setLanguage={setLanguage}
        />
      </div>
    </BrowserRouter>
  );
}

// route를 Protect하는 함수
// 해당 페이지로 이동하기 전, 조건(로그인이 된 상태인가?) 만족했는지 확인
function ProtectedRoute({ isAuthenticated, children }) {

  // 조건 불충족 시, login 페이지로 강제 이동
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 조건 충족 시, children 렌더링
  return children;
}

export default App;
