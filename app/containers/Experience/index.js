/**
 *
 * Experience
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectExperience from './selectors';
import reducer from './reducer';
import saga from './saga';
import WorkExperience from '../../components/WorkExperience';
export function Experience() {
  useInjectReducer({ key: 'experience', reducer });
  useInjectSaga({ key: 'experience', saga });

  return (
    <div>
      <WorkExperience />
    </div>
  );
}

Experience.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  experience: makeSelectExperience(),
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

export default compose(withConnect)(Experience);
