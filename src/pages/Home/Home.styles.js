import styled from "styled-components";

export const Main = styled.main`
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

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1.25rem;
  color: #353635;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }

  @media (max-width: 360px) {
    font-size: 1.2rem;
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
  gap: 24px;
  margin-top: 1.25rem;
  max-width: 100%;

  @media (max-width: 480px) {
    max-width: 70%;
  }

  @media (max-width: 360px) {
    max-width: 80%;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 360px) {
    gap: 0.8rem;
  }
`;

export const AreaCard = styled.div`
  background-color: #fff;
  border-radius: 0.625rem;
  width: 290px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
transition: transform 0.3s ease;
&:hover {
transform: translateY(-10px);
}
`;

export const TitleArea = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #353635;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
`;

export const ParagraphArea = styled.p`
  font-size: 1rem;
  text-align: justify;
  color: #353635;
  font-size: 1rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (max-width: 360px) {
    font-size: 0.7rem;
  }
`;

export const FAQSection = styled.section`
  padding: 3.125rem 0;
  background-color: #fff;
`;

export const Accordion = styled.div`
  &[data-accordion='collapse'] {
    background-color: #fff;
    width: 85%;
  max-width: 85%;
  margin: 0 auto;
  background-color: #fff;

  @media (max-width: 480px) {
    max-width: 70%;
  }

  }
`;

export const AccordionHeading = styled.h2`
  margin: 0;

`;

export const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.25rem;
  color: #353635;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  border: 1px solid rgb(216, 216, 216);
  border-bottom: 0;
  border-radius: 0.3rem 0.3rem;
  transition: background-color 0.2s ease-in-out;
  background-color: #fff;

  span {
    font-weight: bold;
    color: #333;
  }
  
  &:hover {
    background-color:rgb(254, 250, 255);
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.2s ease-in-out; 
    flex-shrink: 0;
  }
`;

export const AccordionBody = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 1.25rem;
  border: 1px solid rgb(216, 216, 216);
  margin-bottom: 0.2rem;

  p {
    margin-bottom: 0.5rem;
    color: #333;
  }

  a {
    color: #333; 
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;