import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const MovieItem = ({
  movie: { id, original_title, overview, vote_average, poster_path },
}) => {
  let posterLink = `https://image.tmdb.org/t/p/w185/${poster_path}`;
  return (
    <div className='listCard'>
      <Link to={`/movie/${id}`}>
        <img src={posterLink} alt='poster' className='poster' />
      </Link>
      <h5>{original_title}</h5>
      <p>{overview}</p>
      <h6>Rating: {vote_average}</h6>
    </div>
  );
};

// MovieItem.propTypes = {
//   movie: PropTypes.object.isRequired,
// };

export default connect(null)(MovieItem);
