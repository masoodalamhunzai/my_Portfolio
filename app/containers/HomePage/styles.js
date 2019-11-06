import styled from 'styled-components';

const Wrapper = styled.div`
  /* height: 100vh; */
  position: relative;
  background-color: #ffff;

  .divider-left {
    border-left: 1px solid #d4d4d4;
    padding: 0 0 0 4rem;
  }
  @media (max-width: 768px) {
    .divider-left {
      border-left: unset !important;
      border-top: 1px solid #d4d4d4 !important;
      margin-top: 2rem;
      padding: 1.5rem 0 0 0 !important;
    }
  }
`;
export default Wrapper;
