import React from 'react';
import loader from './loader.gif';

const Loader = () => {
  return (
    <div style={{ width: '100%' }}>
      <img
        src={loader}
        alt='Loading... '
        style={{ width: '300px', margin: '3rem auto', display: 'block' }}
      />
    </div>
  );
};

export default Loader;
