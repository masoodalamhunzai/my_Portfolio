import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: #20224e;
  height: auto;
  color: white;
  .footer-wrapper {
    padding: 2rem 2rem 1rem 2rem;
    .footer-info-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #2ec39f;
      letter-spacing: 1px;
      text-transform: capitalize;
    }
    p {
      color: #e0e0e0 !important;
      letter-spacing: 0.5px;
    }
    .footer-text {
      display: flex;
      justify-content: center;
      color: white;
    }
    h3 {
      display: inline !important;
    }
  }
  .ant-layout-footer {
    background: #242753 !important;
  }
  @media (max-width: 768px) {
  }
`;
export default Wrapper;
