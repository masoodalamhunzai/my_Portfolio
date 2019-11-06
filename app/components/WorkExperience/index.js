/**
 *
 * WorkExperience
 *
 */

import React from 'react';
import { Row, Col, Steps, Icon } from 'antd';
import Wrapper from './styles';
const { Step } = Steps;
function WorkExperience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem',
      duration: '2013-2019',
      icon: 'highlight',
      class: 'developer-class  full-stack',
    },
    {
      title: 'Front end Developer',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem',
      duration: '2013-2019',
      icon: 'highlight',
      class: 'developer-class  front-end',
    },
    {
      title: 'Creative Designer',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem',
      duration: '2013-2019',
      icon: 'highlight',
      class: 'developer-class  creative-designer',
    },
    {
      title: 'UX / UI Designer',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem',
      duration: '2013-2019',
      icon: 'highlight',
      class: 'developer-class   ux-designer',
    },
  ];

  return (
    <Wrapper>
      <Row gutter={16}>
        <Col span={24}>
          <h3 className="text-center">Work Experience</h3>
          <Steps direction="vertical" current={1}>
            {experiences &&
              experiences.map((experience, index) => (
                <Step
                  key={index}
                  title={experience.title}
                  subTitle={experience.duration}
                  description={experience.description}
                  icon={
                    <Icon type={experience.icon} className={experience.class} />
                  }
                />
              ))}
          </Steps>
        </Col>
      </Row>
    </Wrapper>
  );
}

WorkExperience.propTypes = {};

export default WorkExperience;
