import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Loader from '../../layout/Loader';

const ShowItem = ({ show: { id, overview, vote_average, poster_path } }) => {
  let posterLink = `https://image.tmdb.org/t/p/w185/${poster_path}`;

  return (
    <div className='listCard'>
      <div className='poster'>
        <Link to={`/show/${id}`}>
          <img src={posterLink} alt='poster' className='poster' />
        </Link>
      </div>
      <div id='overview'>
        <p>{overview}</p>
      </div>
      <h6>Rating: {vote_average}</h6>
    </div>
  );
};

ShowItem.propTypes = {
  show: PropTypes.object.isRequired,
};

export default connect(null)(ShowItem);
