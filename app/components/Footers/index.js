/**
 *
 * Footers
 *
 */

import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import Wrapper from './styles';
const { Footer } = Layout;

function Footers() {
  return (
    <Wrapper>
      <Footer className="footer-wrapper">
        <Row>
          <Col
            xs={{ span: 20, offset: 2 }}
            md={{ span: 7, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
            xl={{ span: 7, offset: 1 }}
          >
            <h3 className="footer-info-title">OverView</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur accusamus reiciendis blanditiis, similique animi
              deserunt quaerat a explicabo fugiat soluta.
            </p>
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            md={{ span: 7, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
            xl={{ span: 7, offset: 1 }}
          >
            <h3 className="footer-info-title">Recent Projects</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur accusamus reiciendis blanditiis, similique animi
              deserunt quaerat a explicabo fugiat soluta.
            </p>
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            md={{ span: 7, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
            xl={{ span: 7, offset: 1 }}
          >
            <h3 className="footer-info-title">Social Media</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur accusamus reiciendis blanditiis, similique animi
              deserunt quaerat a explicabo fugiat soluta.
            </p>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={24}>
            <h5 className="footer-text">
              Web Master ©2019 All Rights are reserved.
            </h5>
          </Col>
        </Row>
      </Footer>
    </Wrapper>
  );
}

Footers.propTypes = {};

export default Footers;
