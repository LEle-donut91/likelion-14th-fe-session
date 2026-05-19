import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Animation from './pages/Animation.jsx'
import Drama from './pages/Drama.jsx'
import Entertain from './pages/Entertain.jsx'
import GlobalSeries from './pages/GlobalSeries.jsx'
import Home from './pages/Home.jsx';
import Kids from './pages/Kids.jsx';
import Live from './pages/Live.jsx';
import Movie from './pages/Movie.jsx';
import MoviePlus from './pages/MoviePlus.jsx';
import NotFound from './pages/NotFound';
import Refine from './pages/Refine.jsx';
import { MovieProvider } from './MovieContext.js';
import { TvProvider } from './TvContext.js';

function App() {

  return (
    <BrowserRouter>
      <TvProvider>
        <MovieProvider>
          {/* Header 컴포넌트 */}
          <Header />

          <div>
            <Routes>
              {/* 홈 */}
              <Route path="/" element={
                <div>
                  <Home />
                </div>
              } />

              {/* 예능 */}
              <Route path="/entertain"
                element={
                  <div>
                    <Entertain />
                  </div>
                } />

              {/* 드라마 */}
              <Route path="/drama"
                element={
                  <div>
                    <Drama />
                  </div>
                } />

              {/* 영화 */}
              <Route path="/movie"
                element={
                  <div>
                    <Movie />
                  </div>
                } />

              {/* 애니 */}
              <Route path="/animation"
                element={
                  <div>
                    <Animation />
                  </div>
                } />

              {/* 해외 시리즈 */}
              <Route path="/global_series"
                element={
                  <div>
                    <GlobalSeries />
                  </div>
                } />

              {/* 시사교양 */}
              <Route path="/refine"
                element={
                  <div>
                    <Refine />
                  </div>
                } />

              {/* 키즈 */}
              <Route path="/kids"
                element={
                  <div>
                    <Kids />
                  </div>
                } />

              {/* 영화 플러스 */}
              <Route path="/movie_plus"
                element={
                  <div>
                    <MoviePlus />
                  </div>
                } />

              {/* LIVE */}
              <Route path="/live"
                element={
                  <div>
                    <Live />
                  </div>
                } />

              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* Footer 컴포넌트 */}
          <Footer />
        </MovieProvider>
      </TvProvider>
    </BrowserRouter>
  );
}
export default App;