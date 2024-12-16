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
  
  @media (max-width: 360px) {
    width: 90%;
    height: 80%;
  }
`;

export const BackButton = styled.button`
  margin-top: 6rem;
  margin-bottom: 0.5rem;
  margin-left: 16rem;
  text-align: center;
  color: #353635;
  background-color: transparent;
  width: 4rem;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    background-color: transparent;
  }

  @media (max-width: 360px) {
    margin-left: 1.1rem;
    margin-bottom: 0.4rem;
    margin-top: 4.5rem;
  }
`;

export const VideoTitle = styled.h2`
  font-size: 24px;
  color: #353635;
  margin: 0 auto;
  margin-top: 1rem;
  width: 70%;

  @media (max-width: 360px) {
    margin: auto;
    font-size: 1.2rem;
    margin-top: 1rem;
    width: 84%;
  }
`;

export const VideoDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0 auto;
  width: 70%;

  @media (max-width: 360px) {
    @media (max-width: 360px) {
    margin: 0 auto;
    font-size: 1rem;
    width: 84%;
  }
  }
`;
