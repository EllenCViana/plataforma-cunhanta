import styled from "styled-components";

export const Header = styled.header`
text-align: center;
background-color: #fff;
margin-top: 5rem;
padding: 2rem 0;

h1 {
    font-size: 2.1rem;
     font-weight: bold;
     color: #353635;
    margin-bottom: 10px;
   }

   p {
    font-size: 1.2rem;
    color: #353635;
    max-width: 800px;
   margin: 0 auto;
  }
 `;


export const MissionSection = styled.section`
  padding: 2rem 0;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
transition: transform 0.3s ease;
&:hover {
transform: translateY(-10px);
}

  h3 {
    margin-bottom: 0.3rem;
  }
  ul {
    list-style-type: none
  }
`;

export const Image = styled.img`
    width: 25%;
    margin: auto;
    margin-bottom: 1rem;
`;

export const HighlightsSection = styled.section`
  padding: 3.125rem 0;
  background: #fff;
  text-align: center;
`;

export const HighlightCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  padding: 1.875rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
transition: transform 0.3s ease;
&:hover {
transform: translateY(-10px);
}
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
  width: 30%;
  height: 30rem;
align-items: center;


  
  @media (max-width: 360px) {
    width: 43%;
    height: 23rem;
  }
`;

export const TeamImage = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  border:  2px solid #E61D3F;
  margin-bottom: 1.5rem;
  object-fit: cover;

  @media (max-width: 768px) {
      height: 7rem;
      width: 7rem;
    }
`;