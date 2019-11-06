/**
 *
 * PersonalDetail
 *
 */

import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPersonalDetail from './selectors';
import reducer from './reducer';
import saga from './saga';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
export function PersonalDetail() {
  useInjectReducer({ key: 'personalDetail', reducer });
  useInjectSaga({ key: 'personalDetail', saga });

  return (
    <div>
      <Row>
        <Col span={24}>
          <AboutMe />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Skills />
        </Col>
      </Row>
    </div>
  );
}

PersonalDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  personalDetail: makeSelectPersonalDetail(),
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

export default compose(withConnect)(PersonalDetail);
