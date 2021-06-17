import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getPopularMovies } from '../../../actions/movieActions';
import MovieItem from './MovieItem';
import Loader from '../../layout/Loader';

const Movies = ({ movie: { movies, loading }, getPopularMovies }) => {
  useEffect(() => {
    getPopularMovies();

    //eslint-disable-next-line
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div style={{ background: 'rgb(26, 26, 26)' }}>
        <div className='listWrapper'>
          {movies !== null ? (
            movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)
          ) : (
            <div style={{ marginLeft: '100%' }}>
              <Spinner animation='border'></Spinner>
            </div>
          )}
        </div>
      </div>
    );
  }
};

Movies.propTypes = {
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getPopularMovies })(Movies);
