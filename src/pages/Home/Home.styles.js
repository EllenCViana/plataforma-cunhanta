import styled from "styled-components";

export const Main = styled.main`
  background-color: #f4f4f4;
  width: 100%;
  max-width: 100%;
`;

export const Container = styled.div`
  width: 85%;
  max-width: 85%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;

`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.25rem;
  color: #353635;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AboutSection = styled.section`
  padding: 3.75rem 0;
  background-color: #fff;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 50rem;
  margin: 0 auto;
  color: #353635;

  @media (max-width: 768px) {
    font-size: 1rem;
  }


`;

export const AreasSection = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export const AreaGrid = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1.875rem;
  margin-top: 1.25rem;
  max-width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 360px) {
    gap: 1.3rem;
  }

`;

export const AreaCard = styled.div`
  background-color: #fff;
  border-radius: 0.625rem;
  padding: 1.5rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  p {
    font-size: 1rem;
    margin-top: 0.625rem;
    line-height: 1.5;
    text-align: justify;
    color: #353635;
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const TitleCard = styled.h3`
  font-size: 1.2rem;
  color: #353635;
  margin-bottom: 0.625rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FAQSection = styled.section`
  padding: 3.125rem 0;
  background-color: #fff;
`;

export const FAQItem = styled.div`
  margin-bottom: 1.25rem;
`;

export const FAQQuestion = styled.h4`
  font-size: 1.3rem;
  color: #353635;
  margin-bottom: 0.3125rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const FAQAnswer = styled.p`
  font-size: 1.1rem;
  color: #353635;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
