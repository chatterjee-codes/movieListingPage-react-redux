import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getMovieDetails } from '../../../actions/movieActions';

const Movie = ({ movie: { movie }, getMovieDetails }) => {
  const { id } = useParams();
  useEffect(() => {
    getMovieDetails(id);

    //eslint-disable-next-line
  }, []);
  let posterLink = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;

  return (
    <div className='wrapper-2'>
      <div>
        <div>
          <img src={posterLink} alt='' />
        </div>
        <div>
          <button>Watch Now</button>
        </div>
      </div>
      <div>
        <h1>{movie.original_title}</h1>
        <h4>{movie.tagline}</h4>
        <div className='subWrapper-2'>
          <div>
            <h4>Rating: {movie.vote_average}</h4>
          </div>
          <div>
            <h4>Released on: {movie.release_date}</h4>
          </div>
        </div>
        <div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getMovieDetails })(Movie);

// original_title,
//       tagline,
//       overview,
//       poster_path,
//       vote_average,
//       release_date,
