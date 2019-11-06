import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: auto;

  .divider-left {
    border-left: 1px solid #d4d4d4;
    padding: 0 0 0 4rem;
  }
  .skills-title {
    margin-top: 3rem;
    text-align: center;
    h2 {
      font-size: 2.3rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-bottom: 4px solid #047df9;
      /* border-bottom: 4px solid #2ab392; */
      display: inline-block;
      border-radius: 10px;
    }
    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
  .language-skill {
    margin: 0 auto;
    p {
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
      padding: 0.2rem 0;
    }
  }
  .ant-progress-text {
    font-weight: bold;
    display: none;
  }
  .ant-progress-inner {
    background-color: #d4d4d4;
  }
  .ant-progress-bg {
    height: 10px !important;
  }
  @media (max-width: 768px) {
    .skills-title {
      margin-top: 2rem !important;
      h2 {
        font-size: 2rem !important;
      }
      h3 {
        font-size: 1.2rem !important;
      }
    }
    .language-skill {
      p {
        font-size: 0.9rem !important;
      }
    }
    .divider-left {
      border-left: unset !important;
      border-top: 1px solid #d4d4d4 !important;
      margin-top: 2rem;
      padding: 0 !important;
    }
  }
  @media (max-width: 576px) {
    .skills-title {
      margin-top: 2rem !important;
      font-size: 1.6rem !important;
      h2 {
        border: unset !important;
        font-size: 1.6rem !important;
      }
    }
  }
`;

export default Wrapper;
