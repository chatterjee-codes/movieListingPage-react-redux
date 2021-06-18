import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { getMovieDetails } from '../../../actions/movieActions';
import Loader from '../../layout/Loader';

const Movie = ({ movie: { movie, loading }, getMovieDetails }) => {
  const { id } = useParams();
  useEffect(() => {
    getMovieDetails(id);

    //eslint-disable-next-line
  }, []);
  let posterLink = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className='wrapper-2'>
        <div>
          <div>
            <img src={posterLink} alt='' />
          </div>

          <button>Watch Now</button>
        </div>
        <div className='wrapper-body'>
          <h1>{movie.original_title}</h1>
          <h3>{movie.tagline}</h3>
          <div className='subWrapper-2'>
            <div>
              <h4>Rating: {movie.vote_average}</h4>
            </div>
            <div>
              <h4>Released on: {movie.release_date}</h4>
            </div>
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getMovieDetails })(Movie);
