/**
 *
 * Header
 *
 */

import React from 'react';
import { Row, Col } from 'antd';
import ProfiePhoto from '../ProfiePhoto';
import Wrapper from './styles';

function Header() {
  return (
    <Wrapper>
      <Row type="flex" justify="center">
        <Col span={24}>
          <div className="header-bg ">
            <div className="profile-username alpha">
              <div className="user-info">
                <h4>Masood Alam</h4>
                <h5 className="tag-line">Coder , Designer, professional</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div className="user-photo">
            <ProfiePhoto />
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}

Header.propTypes = {};

export default Header;
