import styled from 'styled-components';
import bgImg from '../../images/bg-img.png';
// import bgImg from '../../images/bg-image.png';
// import bgImg from '../../images/banner-img.jpg';
// import bgImg from '../../images/banner-image.jpg';
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: #333333;
  height: auto;
  /* background: #152c9f; */

  .header-bg {
    background: url(${bgImg});
    box-shadow: 0px 1px 10px 0 #ccc;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 65vh;
    width: 100%;
    display: flex;
    .alpha {
      transition: 0.5s ease-in-out;
      position: absolute;
      display: none;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
      top: 0;
      left: 0;
    }
    .profile-username {
      display: flex;
      justify-content: start;
      padding-left: 2rem;
      z-index: 1;
      h4 {
        align-self: center;
        font-size: 3rem;
        color: #01f3f3;
        letter-spacing: 3px;
        text-transform: uppercase;
        margin: 0px;
      }
      .user-info {
        align-self: center;
        text-align: center;
        .tag-line {
          margin: 0px;
          line-height: 2rem;
          color: #95ecff;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }
    }
  }
  .user-photo {
    position: absolute;
    border: 3px solid #647fa9;
    border-radius: 50%;
    border-width: 0.4rem;
    left: 45%;
    bottom: -4rem;
    z-index: 1111;
  }

  @media (max-width: 992px) {
    .profile-username {
      h4 {
        font-size: 2rem !important;
      }
      .tag-line {
        font-size: 0.8rem !important;
      }
    }
    .user-info {
      h4 {
        font-size: 1.7rem !important;
      }
    }
    .user-photo {
      border-width: 0.2rem;
      bottom: -2.5rem !important;
    }
  }
`;
export default Wrapper;
