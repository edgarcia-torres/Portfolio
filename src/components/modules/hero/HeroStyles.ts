import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background: black;
`;

export const Canvas = styled.canvas`
  height: 400px;
  width: 100%;
  position: relative;
  z-index: 3;

  @media(max-width: 700px){
    height: 35vh;
  }
`;

export const Container = styled.div`
width:600px;
margin-top:30px;
margin-bottom:30px;
margin-left: 10%;



  position: absolute;
  top: 50%;

  z-index: 4;
  transform: translateY(-50%);

  .heading-subtitle {
    font-size: 50px;
  }

  @media (max-width: 1199.98px) {

    top: 10%;
    transform: initial;
    align-items: center;
    margin-left: 2%;

    @media(max-width: 700px){
      .heading-subtitle {
        margin-left: 0%;
        font-size: 30px;
      }
    }



  }
`;

export const Content = styled.div`

  color: var(--text-light);
  position: relative;
  z-index: 3;
  

  .caption {
    @media (max-width: 575.98px) {
      font-weight: 600;
    }
  }

  .title {
    font-weight: bold;
    span {
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 575.98px) {
      margin-top: 10px;
    }
  }

  .subtitle {
    opacity: 0.7;
    font-weight: 600;
    @media (max-width: 575.98px) {
      font-weight: 500;
    }
  }
`;
