import styled from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.6)),
    url("/images/hero-sobre.jpg") no-repeat center center/cover;
  color: #fff;
  height: 17.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 5rem;
`;

export const HeroTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 0.625rem;
  color: #fff;
`;

export const HeroParagraph = styled.p`
  font-size: 1rem;
  max-width: 70%;
  margin: 0 auto;
`;

export const MissionSection = styled.section`
  padding: 3.125rem 0;
  background: #fff;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.875rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  ul {
    list-style-type: none
  }
`;

export const HighlightsSection = styled.section`
  padding: 3.125rem 0;
  background: #f4f4f4;
  text-align: center;
`;

export const HighlightCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  padding: 1.875rem;
  img {
    width: 5rem;
    margin-bottom: 1.25rem;
  }
`;

export const TeamSection = styled.section`
  padding: 3.125rem 0;
  background: #fff;
  text-align: center;

`;

export const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media (max-width: 360px) {
    gap: 2rem;
  }
`;

export const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  width: 30%;
  height: 25rem;
  
  @media (max-width: 360px) {
    width: 43%;
    height: 23rem;
  }
`;

export const TeamImage = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  border: 3px solid #4F1C59;
  margin-bottom: 0.625rem;
  object-fit: cover;
  @media (max-width: 360px) {
    width: 7rem;
    height: 7rem;
  }
`;


