import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import FavoritesList from "./FavoritesList";
import "./MovieFavorites.css";
import axios from "axios";

const API_URL = "https://6a17e7621878294b597c07eb.mockapi.io/favorites";

function MovieFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 샘플 영화 데이터
  const sampleMovies = [
    {
      id: "155",
      title: "다크 나이트",
      poster: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: "13",
      title: "포레스트 검프",
      poster: "https://image.tmdb.org/t/p/w300/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    },
    {
      id: "680",
      title: "펄프 픽션",
      poster: "https://image.tmdb.org/t/p/w300/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    },
    {
      id: "27205",
      title: "인셉션",
      poster: "https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    {
      id: "278",
      title: "쇼생크 탈출",
      poster: "https://image.tmdb.org/t/p/w300/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
      id: "157336",
      title: "인터스텔라",
      poster: "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
  ];

  // GET: 찜한 영화 목록 조회 -> Axios로 리팩토링
  const fetchFavorites = () => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((response) => {
        setFavorites(response.data);
        setError(null);
      })
      .catch((err) => {
        setError("찜한 영화 목록을 불러오는데 실패했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // POST: 영화 찜하기 -> Axios로 리팩토링
  const addToFavorites = (movie) => {
    axios
      .post(API_URL, {
        movieId: movie.id,
        title: movie.title,
        poster: movie.poster,
        addedAt: new Date().toISOString(),
      })
      .then((response) => {
        setFavorites((prev) => [...prev, response.data]);
        alert(`"${movie.title}"을(를) 찜 목록에 추가했습니다!`);
      })
      .catch((err) => {
        alert("찜하기에 실패했습니다.");
        console.log(err);
      });
  };

  // DELETE: 찜 취소 -> Axios로 리팩토링
  const removeFromFavorites = (favoriteId, title) => {
    const confirmDelete = window.confirm(
      `"${title}"을(를) 찜 목록에서 제거하시겠습니까?`,
    );
    if (!confirmDelete) return;

    axios
      .delete(`${API_URL}/${favoriteId}`)
      .then(() => {
        setFavorites((prev) => prev.filter((fav) => fav.id !== favoriteId));
        alert(`"${title}"을(를) 찜 목록에서 제거했습니다.`);
      })
      .catch((err) => {
        alert("찜 취소에 실패했습니다.");
      });
  };

  // 영화가 이미 찜되어 있는지 확인
  const isMovieFavorited = (movieId) => {
    return favorites.some((fav) => fav.movieId === movieId);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  // 렌더링
  return (
    <div className="movie-favorite-container">
      <h1 className="main-title">🎬 찜한 영화 CRUD 실습</h1>
      <div className="movies-section">
        <h2 className="section-title">🍿 영화 목록</h2>
        <div className="movies-grid">
          {sampleMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddToFavorites={addToFavorites}
              isFavorited={isMovieFavorited(movie.id)}
            />
          ))}
        </div>
      </div>
      {error && <div className="error-message">❌ {error}</div>}
      <FavoritesList
        favorites={favorites}
        onRemoveFavorite={removeFromFavorites}
        loading={loading}
        onRefresh={fetchFavorites}
      />
    </div>
  );
}

export default MovieFavorites;
