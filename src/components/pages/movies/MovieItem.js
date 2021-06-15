import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getPopularMovies } from '../../../actions/movieActions';

const MovieItem = ({ movie }) => {
  let posterLink = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  return (
    <Fragment>
      <Link to='/movie'>
        <Card>
          <Card.Img variant='top' src={posterLink} />
          <Card.Body>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Fragment>
  );
};

// MovieItem.propTypes = {
//   movie: PropTypes.object.isRequired,
// };

export default connect(null)(MovieItem);
