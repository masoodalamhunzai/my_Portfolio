import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .profile-photo {
    display: flex;
    justify-content: center;
    width: 130px;
    height: 130px;
    img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
    }
  }
  @media (max-width: 768px) {
    .profile-photo {
      width: 90px !important;
      height: 90px !important;
      img {
        width: 90px !important;
        height: 90px !important;
      }
    }
  }
`;

export default Wrapper;
