import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  height: 60rem;
  width: 100%;
  @media (max-width: 360px) {
    height: 30rem;
    padding: 0;
  }
`;

export const VideoFrame = styled.iframe`
  margin: 0 auto;
  width: 70%;
  height: 60%;
  border: none;
  border-radius: 8px;

  @media (max-width: 1024px) {
    width: 90%;
    height: 80%;
    }

  @media (max-width: 768px) {
    width: 90%;
    height: 40%;
    }

    @media (max-width: 480px) {
      width: 85%;
      height: 25%;
    }

  @media (max-width: 360px) {
    width: 90%;
    height: 80%;
  }
`;

export const BackButton = styled.button`
  margin-top: 6rem;
  margin-bottom: 0.5rem;
  margin-left: 14%;
  text-align: center;
  color: #353635;
  background-color: transparent;
  width: 8rem;
  font-size: 1rem;
  text-decoration: none;

  font-weight: bold;

  &:hover {
    text-decoration: underline;
    background-color: transparent;
  }

  @media (max-width: 1024px) {
    margin-top: 5rem;
  margin-bottom: 0.5rem;
  margin-left: 3%;
    }

  @media (max-width: 768px) {
    margin-top: 5rem;
  margin-bottom: 0.5rem;
  margin-left: 3%;
    }

    @media (max-width: 480px) {
      margin-top: 3.5rem;
  margin-bottom: 0.5rem;
  margin-left: 4%;
    }

    @media (max-width: 360px) {
      margin-top: 3rem;
  margin-bottom: 0.5rem;
  margin-left: 1%;
    }

`;

export const VideoTitle = styled.h2`
  font-size: 1.5rem;
  color: #353635;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  width: 70%;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    width: 90%;
    }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    width: 90%;
    }

    @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    width: 85%;
    }

  @media (max-width: 360px) {
    font-size: 1.1rem;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    width: 90%;
  }
`;

export const VideoDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0 auto;
  width: 70%;
  height: 30%;

  
  @media (max-width: 1024px) {
    font-size: 1.1rem;
    width: 90%;
    height: 30%;
    }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      width: 85%;
    }

  @media (max-width: 360px) {
    font-size: 1rem;
    width: 90%;
  }
`;