/**
 *
 * Headers
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHeaders from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Headers() {
  useInjectReducer({ key: 'headers', reducer });
  useInjectSaga({ key: 'headers', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Headers.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  headers: makeSelectHeaders(),
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

export default compose(withConnect)(Headers);
