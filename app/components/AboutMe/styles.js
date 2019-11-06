import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
  height: 300px;
  .about-title {
    margin-top: 4rem;
    text-align: center;
    h3 {
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
  .about-para {
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  .about-qoute {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    color: black;
    padding-bottom: 1rem;
    letter-spacing: 0.5px;
  }
  .protfolio {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid #047df9;
    /* border: 1px solid #2ab392; */
    padding: 1rem;
    border-radius: 50%;
    width: 170px;
    height: 170px;
    margin: 1rem auto;
    border-width: 0.2rem;
    cursor: pointer;
    h3 {
      align-self: center;
      font-size: 2rem;
      color: #047df9;
      /* color: darkcyan; */
      padding-top: 0.5rem;
    }
    .porfolio-icon {
      align-self: center;
      text-align: center;
      .large-icon {
        font-size: 2.3rem;
      }
    }
  }

  .porfolio-title {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
    /* padding-left: 2rem; */
  }
`;

export default Wrapper;
