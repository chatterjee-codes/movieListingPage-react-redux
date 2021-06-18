import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const MovieItem = ({ movie: { id, overview, vote_average, poster_path } }) => {
  let posterLink = `https://image.tmdb.org/t/p/w185/${poster_path}`;
  return (
    <div className='listCard'>
      <Link to={`/movie/${id}`}>
        <img src={posterLink} alt='poster' className='poster' />
      </Link>
      <div id='overview'>
        <p>{overview}</p>
      </div>
      <h6>Rating: {vote_average}</h6>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default connect(null)(MovieItem);
