/**
 *
 * AboutMe
 *
 */

import React from 'react';
import { Row, Col, Divider, Icon } from 'antd';
import Wrapper from './styles';

function AboutMe() {
  const services = [
    { title: 'Profile', value: '', icon: 'profile' },
    { title: 'Clients', value: 50, icon: 'team' },
    { title: 'Projects', value: 99, icon: 'project' },
    { title: 'Hobbies', value: '', icon: 'flag' },
  ];
  return (
    <Wrapper>
      <Row>
        <Col span={24}>
          <div className="about-title">
            <h3>About Me </h3>
          </div>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 6 }}>
          <div className="about-qoute">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ."
          </div>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              accusantium quos quis ipsum quod autem sed quisquam provident vel
              iste eveniet aspernatur totam neque excepturi aperiam fuga,
              blanditiis commodi odio consequuntur minus delectus architecto?
              Illum enim ut eius modi, neque pariatur provident, atque eligendi,
              soluta accusantium veritatis illo id eaque!
            </p>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        {services &&
          services.map((service, index) => (
            <Col
              xs={{ span: 24 }}
              sm={{ span: 8, offset: 2 }}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              xl={{ span: 3 }}
              key={index}
            >
              <div className="protfolio">
                <span className="porfolio-icon ">
                  <Icon
                    type={service.icon}
                    className="large-icon"
                    style={{ color: '#047df9' }}
                  />
                  <h3>{service.value}</h3>
                </span>
              </div>
              <h4 className="porfolio-title"> {service.title}</h4>
            </Col>
          ))}
      </Row>
      <Divider />
    </Wrapper>
  );
}

AboutMe.propTypes = {};

export default AboutMe;
