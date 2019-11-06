/**
 *
 * MyServices
 *
 */

import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import Wrapper from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
function MyServices() {
  const services = [
    {
      title: 'Backend Developer',
      class: 'services-class web-design',
      desc: 'Php Developer',
      icon: 'code',
    },
    {
      title: 'Font-end Developer',
      class: 'services-class web-design',
      icon: 'build',
    },
    {
      title: 'Ux/UI Designer',
      class: 'services-class web-design',
      icon: 'bulb',
    },

    {
      title: 'Graphic Designer',
      class: 'services-class web-design',
      icon: 'bg-colors',
    },
    {
      title: 'Bug Fixer',
      class: 'services-class web-design',
      icon: 'bug',
    },
    {
      title: 'Database Developer ',
      class: 'services-class web-design',
      icon: 'database',
    },
  ];
  return (
    <Wrapper>
      <Row>
        <Col span={24}>
          <div className="services-title">
            <h3>My Services</h3>
          </div>
        </Col>
      </Row>
      <Row>
        {services &&
          services.map((items, index) => (
            <Col
              xs={{ span: 20, offset: 2 }}
              sm={{ span: 7, offset: 1 }}
              md={{ span: 7, offset: 1 }}
              lg={{ span: 7, offset: 1 }}
              xl={{ span: 7, offset: 1 }}
              key={index}
            >
              <div className="services">
                <Card>
                  <Icon type={items.icon} className={items.class} />
                  <h4>{items.title}</h4>
                </Card>
              </div>
            </Col>
          ))}
      </Row>
    </Wrapper>
  );
}

MyServices.propTypes = {};

export default MyServices;
