/**
 *
 * Services
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectServices from './selectors';
import reducer from './reducer';
import saga from './saga';
import MyServices from '../../components/MyServices';

export function Services() {
  useInjectReducer({ key: 'services', reducer });
  useInjectSaga({ key: 'services', saga });

  return (
    <div>
      <MyServices />
    </div>
  );
}

Services.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  services: makeSelectServices(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Services);
