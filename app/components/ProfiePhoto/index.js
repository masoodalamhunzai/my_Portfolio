/**
 *
 * ProfiePhoto
 *
 */

import React from 'react';
import ProfilePic from '../../images/avatar1.png';
import Wrapper from './styles';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ProfiePhoto() {
  return (
    <Wrapper>
      <div className="profile-photo">
        <img src={ProfilePic} alt="profile photo" />
      </div>
    </Wrapper>
  );
}

ProfiePhoto.propTypes = {};

export default ProfiePhoto;
