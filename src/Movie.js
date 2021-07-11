import React from 'react';
import PropTypes from 'prop-types'; /* Movie에 넘어와야 하는 영화 데이터를 정의하고 관리하기 위해 사용함 */
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">{genres.map((genres) => {return <li className="movie__genre">{genres}</li>;})}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;