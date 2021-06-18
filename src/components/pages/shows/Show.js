import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { getShowDetails } from '../../../actions/showActions';
import Loader from '../../layout/Loader';

const Show = ({ show: { show, loading }, getShowDetails }) => {
  const { id } = useParams();
  useEffect(() => {
    getShowDetails(id);

    //eslint-disable-next-line
  }, []);
  let posterLink = `https://image.tmdb.org/t/p/w185/${show.poster_path}`;
  if (loading) {
    return <Loader />;
  } else {
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
        <div className='wrapper-body'>
          <h1>{show.name}</h1>
          <h3>{show.tagline}</h3>
          <div className='subWrapper-2'>
            <div>
              <h4>Rating: {show.vote_average}</h4>
            </div>
            <div>
              <h4>First Air Date: {show.first_air_date}</h4>
            </div>
          </div>
          <div>
            <p>{show.overview}</p>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  show: state.show,
});

export default connect(mapStateToProps, { getShowDetails })(Show);
