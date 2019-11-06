import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .developer-class {
    border-radius: 50%;
    padding: 0.6rem;
    color: white;
  }
  .full-stack {
    background-color: #1890ff;
  }
  .front-end {
    background-color: #e91e63;
  }
  .creative-designer {
    background-color: #9c27b0;
  }
  .ux-designer {
    background-color: #ff9800;
  }
  .ant-steps-item-tail {
    top: 4px !important;
    left: 20px !important;
  }
  .ant-steps-item-content {
    background-color: #e3e5e86e;
    padding: 1rem;
    border-radius: 0 7px 7px 60px;
    margin-top: 1rem;
  }
  .ant-steps-item-description {
    font-size: 0.9rem !important;
    color: rgba(0, 0, 0, 0.65) !important;
    letter-spacing: 0.3px;
  }
  .ant-steps-item-tail::after {
    background-color: #1890ff !important;
    width: 3px !important;
  }
  .ant-steps-item-title {
    color: #000000b8 !important;
    font-weight: bold;
    letter-spacing: 1px;
  }
  @media (max-width: 576px) {
    .ant-steps-item-title {
      line-height: 20px !important;
    }
  }
`;
export default Wrapper;
