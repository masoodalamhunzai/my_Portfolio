/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Row, Col, Divider } from 'antd';
import PersonalDetail from '../PersonalDetail';
import Experience from '../Experience';
import Services from '../Services';

import Wrapper from './styles';

export default function HomePage() {
  return (
    <Wrapper>
      <Row>
        <Col span={24}>
          <PersonalDetail />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 22, offset: 1 }}
          xl={{ span: 22, offset: 1 }}
        >
          <Services />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 16, offset: 4 }}
        >
          <Experience />
        </Col>
      </Row>
      <Divider />
    </Wrapper>
  );
}
