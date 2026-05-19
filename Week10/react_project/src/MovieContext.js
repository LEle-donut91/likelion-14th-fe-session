import { createContext, useState, useEffect } from "react";

// context 생성 (MyContext)
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // 인기 있는 영화 불러오기
    useEffect(() => {
        const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;

        console.log(`API Key:`, API_KEY);
        console.log(`요청 URL:`, url);

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch');
                return response.json()
            })
            .then(data => {
                console.log(`전체 응답:`, data);
                setLoading(false);
                setMovies(data.results);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false)
            });
    }, []);

    return (
        <MovieContext.Provider value={{ movies, loading, error }}>
            {children}
        </MovieContext.Provider>
    );
}