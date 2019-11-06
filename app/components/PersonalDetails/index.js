/**
 *
 * PersonalDetails
 *
 */

import React from 'react';
import { Row, Col, Collapse } from 'antd';
import Wrapper from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PersonalDetails() {
  return (
    <Wrapper>
      <Row>
        <Col span={24}>
          <div className="profile-pic" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="personal-detail-heading">
            <h3> Personal Details </h3>
          </div>
          <div className="personal-detail-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae
              provident culpa, fugit blanditiis esse velit tenetur assumenda
              tempora itaque quasi natus nisi ipsum enim voluptatem quisquam
              totam facilis ex.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 20, offset: 2 }}>
          <div className="personal-detail-heading">
            <h3> Personal Info </h3>
          </div>
          <div className="personal-info">
            <strong>Name:</strong>
            <span className="info">Masoo Alam</span>
            {/* <div className="err"> Lorem ipsum dolor  adipisicing elit. </div> */}
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}

PersonalDetails.propTypes = {};

export default PersonalDetails;
