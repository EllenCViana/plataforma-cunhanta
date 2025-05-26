import styled from 'styled-components';


export const Category = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #353635;
  margin-bottom: 1rem;
`;

export const CourseSection = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 24px;
  margin-top: 1.25rem;
  max-width: 100%;
`;

export const CourseCard = styled.div`
  background-color: fff;
  border-radius: 12px;
  width: 290px;
  height: 434px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
transition: transform 0.3s ease;
&:hover {
transform: translateY(-10px);
}
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 44%;
  object-fit: cover;
`;

export const CourseInstrutor = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #353635;
  margin: -30px 0 0 -150px;
  color: #fff;
`;

export const CourseTitle = styled.h3`
  font-size: 20px;
  color: #353635;
  height: 64px;
  margin: 24px 24px 5px;
`;

export const CourseDescription = styled.p`
  font-size: 16px;
  height: 70px;
  color: #353635;
  margin: 0 24px 15px;
  
`;

export const CourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 24px 10px;
  color: #353635;
  font-size: 12px;
`;

export const CourseDuration = styled.span`
  background-color: #fff;
  border: 1px solid #cdcdcd;
  padding: 2px 8px;
  border-radius: 8px;
`;

export const CourseTag = styled.span`
  background-color: #E61D3F;
  padding: 2px 8px;
  border-radius: 8px;
  color: #fff;
`;

export const CourseButton = styled.button`
  width: 100%;
  background-color: #E61D3F;
  color: #fff;
  cursor: pointer;
  border-radius: 0 0 12px 12px;

  &:hover {
    background-color: #E61D3F;
  }
`;
