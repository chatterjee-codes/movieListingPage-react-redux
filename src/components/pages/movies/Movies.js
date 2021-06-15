import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getPopularMovies } from '../../../actions/movieActions';
import MovieItem from './MovieItem';

const Movies = ({ movie: { movies }, getPopularMovies }) => {
  useEffect(() => {
    getPopularMovies();

    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {/* {movies !== null
        ? movies.map((movie) => <p>{movie.id}</p>)
        : 'Invalid Request'} */}
      <CardDeck>
        {movies !== null
          ? movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)
          : 'Invalid Request'}
      </CardDeck>
    </Fragment>
  );
};
// Movies.propTypes = {
//   movie: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getPopularMovies })(Movies);
