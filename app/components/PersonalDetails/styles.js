import styled from 'styled-components';
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  p {
    font-size: 1rem;
    margin: 0;
    padding: 0.2rem 0;
    letter-spacing: 0.5px;
  }

  .personal-info {
    display: flex;
    justify-content: start;
    .info {
      padding-left: 1rem;
      font-weight: bold;
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
  }
`;
export default Wrapper;
