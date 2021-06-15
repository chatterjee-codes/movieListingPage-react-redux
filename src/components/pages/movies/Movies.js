import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getPopularMovies } from '../../../actions/movieActions';
import MovieItem from './MovieItem';

const Movies = ({ movie: { movies }, getPopularMovies }) => {
  useEffect(() => {
    getPopularMovies();

    //eslint-disable-next-line
  }, []);
  return (
    <div style={movieStyle}>
      {movies !== null ? (
        movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)
      ) : (
        <div style={{ marginLeft: '100%' }}>
          <Spinner animation='border'></Spinner>
        </div>
      )}
    </div>
  );
};
// Movies.propTypes = {
//   movie: PropTypes.object.isRequired,
// };

const movieStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '2rem',
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getPopularMovies })(Movies);
