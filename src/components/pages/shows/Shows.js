import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getShows } from '../../../actions/showActions';
import ShowItem from './ShowItem';
import Loader from '../../layout/Loader';

const Shows = ({ show: { shows, loading }, getShows }) => {
  useEffect(() => {
    getShows();

    //eslint-disable-next-line
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className='listWrapper'>
        {shows !== null ? (
          shows.map((show) => <ShowItem show={show} key={show.id} />)
        ) : (
          <div style={{ marginLeft: '100%' }}>
            <Spinner animation='border'></Spinner>
          </div>
        )}
      </div>
    );
  }
};
// Movies.propTypes = {
//   movie: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  show: state.show,
});

export default connect(mapStateToProps, { getShows })(Shows);
