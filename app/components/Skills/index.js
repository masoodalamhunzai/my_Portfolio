/**
 *
 * Skills
 *
 */

import React, { useState } from 'react';
import { Row, Col, Divider, Progress } from 'antd';
import Wrapper from './styles';

function Skills() {
  const [english, setEnglish] = useState(70);
  const language = [
    { name: 'ENGLISH', percent: 60 },
    { name: 'URDU', percent: 80 },
    { name: 'BURUSHAKI', percent: 99 },
  ];
  const skills = [
    { name: 'PHP', percent: 70 },
    { name: 'SYMFONY', percent: 60 },
    { name: 'REACTJS', percent: 73 },
    { name: 'JAVASCRIPT', percent: 78 },
    { name: 'AJAX', percent: 80 },
    { name: 'JQUERY', percent: 75 },
    { name: 'HTML5', percent: 85 },
    { name: 'CSS3', percent: 90 },
  ];
  return (
    <Wrapper>
      <Row>
        <Col span={24}>
          <div className="skills-title">
            <h4>Skills</h4>
            <h2>What I am Best at</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
          xl={{ span: 10, offset: 1 }}
        >
          <div className="skills-title">
            <h3>language skills</h3>
          </div>
          {language.map((items, index) => (
            <div className="language-skill" id={index}>
              <p>{items.name}</p>
              <Progress
                percent={items.percent}
                strokeWidth={20}
                strokeColor="#047df9"
              />
              {/* strokeColor="#2ab392" */}
            </div>
          ))}
        </Col>
        <Divider type="vertical" />
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
          xl={{ span: 10, offset: 1 }}
          className="divider-left"
        >
          <div className="skills-title">
            <h3>professional Skills</h3>
          </div>
          {skills.map((items, index) => (
            <div className="language-skill" id={index}>
              <p>{items.name}</p>
              <Progress
                percent={items.percent}
                strokeWidth={20}
                strokeColor="#047df9"
              />
            </div>
          ))}
        </Col>
      </Row>
      <Divider />
    </Wrapper>
  );
}

Skills.propTypes = {};

export default Skills;
