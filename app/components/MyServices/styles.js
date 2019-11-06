import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .services-title {
    text-align: center;
    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  .services {
    margin-bottom: 1rem;
    text-align: center;
    h4 {
      font-size: 1rem;
      font-weight: bold;
    }
  }
  .services-class {
    border-radius: 50%;
    padding: 0.6rem;
    color: #047df9;
    font-size: 3rem;
  }
  .web-design {
    /* background-color: #1890ff; */
  }

  .ant-card-bordered {
    border-radius: 6px;
  }
  @media (max-width: 576px) {
    .ant-card-bordered {
      margin-top: 1rem !important;
    }
  }
`;

export default Wrapper;
