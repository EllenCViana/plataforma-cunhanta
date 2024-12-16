import styled from "styled-components";

export const HeroHome = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34rem;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),
    url('/images/hero2.jpg');
  background-size: cover;
  background-position: center;
  margin-top: 5rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    height: 28rem;
    margin-top: 4rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    height: 20rem;
    margin-top: 3rem;
    padding: 0 1rem;
  }

  @media (max-width: 360px) {
    height: 16rem;
    margin-top: 2rem;
    padding: 0 0.7rem;
  }
`;

export const HeroText = styled.div`
  color: #ffffff;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 2rem;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }

    @media (max-width: 360px) {
      font-size: 1.1rem;
      width: 90%;
      margin-bottom: 0.4rem;
      margin-top: 1rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin: 0.6rem 0 2.2rem 0;
    max-width: 41.25rem;
    line-height: 1.5;

    @media (max-width: 1024px) {
      font-size: 1rem;
      max-width: 35rem;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      max-width: 30rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      max-width: 22rem;
    }

    @media (max-width: 360px) {
      font-size: 0.75rem;
      max-width: 100%;
      margin: 0;
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
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #5B2668;
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 0.75rem 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.7rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.6rem 0.9rem;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
    padding: 0.5rem 0.8rem;
    margin-top: 0.6rem;
  }
`;
