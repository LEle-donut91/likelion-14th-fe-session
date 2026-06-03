import React from "react";

function MovieCard({movie, onAddToFavorites, isFavorited}) {
    return (
        <div className="movie-card">
            <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster"
                />
            <h3 className="movie-title">{movie.title}</h3>
            <button
            onClick={() => onAddToFavorites(movie)}
            disabled={isFavorited}
            className="btn btn-favorite">
                {isFavorited ? '♥️ 찜' : '🤍 찜하기'}
            </button>
        </div>
    )
}

export default MovieCard;
