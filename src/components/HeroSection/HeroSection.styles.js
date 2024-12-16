import styled from "styled-components";

export const HeroHome = styled.section`
  display: flex;
  align-items: center;
  height: 34rem;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.074), rgba(0, 0, 0, 0.800)),
    url('/images/hero2.jpg');
  background-size: cover;
  background-position: center;
  margin-top: 5rem;

  @media (max-width: 360px) {
    height: 15rem;
    margin-top: 4rem;
    padding: 0 0.7rem;
  }

`;

export const HeroText = styled.div`
  color: #ffffff;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;

    @media (max-width: 360px) {
    width: 17rem;
    font-size: 1.1rem;
  }

  }

  p {
    font-size: 1.2rem;
    margin: 0.6rem 0 2.2rem 0;
    width: 41.25rem;

    @media (max-width: 360px) {
    width: 16rem;
    font-size: 0.8rem;
    margin: 0.4rem 0 0.7rem 0;
  }

  }
`;

export const HeroButton = styled.a`
  background: #4F1C59;
  color: #fff;
  padding: 0.875rem 1.5rem;
  font-size: 1.125rem;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #5B2668;
    text-decoration: none;
  }

  @media (max-width: 360px) {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  }
  
`;
