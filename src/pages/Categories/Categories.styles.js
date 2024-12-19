import styled from "styled-components";

export const CategoriesContainer = styled.div`
  margin: auto; 
  margin-top: 7rem;
  width: 80%;

  @media (max-width: 768px) {
    margin-top: 6rem;
  }

  @media (max-width: 480px) {
    margin-top: 5rem;
  }

  @media (max-width: 360px) {
    margin-top: 4rem;
  }
`;

export const DivSearchVideo = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 0.7rem;
`

export const SearchInput = styled.input`
  padding: 0.8rem;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 78%;

  @media (max-width: 360px) {
    font-size: 0.875rem;
  }
`;

export const SelectContainer = styled.div`
width: 20%;

  select {
    width: 100%;
    font-size: 0.9rem;
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
`;

export const FilterContainer = styled.div`

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;

export const FilterButton = styled.button`
  padding: 0.6rem 1rem;
  margin-right: 0.7rem;
  margin-bottom: 10px;
  background-color: ${(props) => (props.active ? "#4E1B5A" : "#7D3E8E")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#4E1B5A" : "#4E1B5A")};
  }
`;



export const Section = styled.section`
  margin-top: 2rem;
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #353635;
  text-align: center;
  margin-bottom: 1.875rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1.25rem;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }
`;

export const CategoryCard = styled.div`
  display: grid;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  width: 18rem;
  border: 1px solid #cdcdcd;

  @media (max-width: 1024px) {
    width: 16rem;
  }

  @media (max-width: 768px) {
    width: 12rem;
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 50%;

  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const CategoryImage = styled.img`
  width: 55%;
  max-width: 55%;
  border-radius: 4px;
  margin: auto;
  margin-bottom: 1rem;
`;

export const CategoryTitle = styled.h3`
  font-size: 1rem;
  color: #353635;
  margin-bottom: 1rem;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }
`;

export const CategoryDescription = styled.p`
  color: #353635;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1.125rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

export const VideoLink = styled.a`
  display: inline-block;
  margin-top: auto;
  padding: 0.625rem 1.25rem;
  background-color: #4f1c59;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  font-size: 0.875rem;

  &:hover {
    background-color: #5b2668;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

export const NoItemsMessage = styled.div`
  font-size: 16px;
  color: #353635;
  margin-top: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
  }
`;
