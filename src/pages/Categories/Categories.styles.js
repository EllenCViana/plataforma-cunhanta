import styled from "styled-components";

export const CategoriesContainer = styled.div`
  margin-top: 5rem;
`;

export const Sidebar = styled.div`
  padding: 0;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: 100vh;
  max-height: 100vh;
  position: fixed;
  width: 20%;
  max-width: 20%;

  @media (max-width: 1024px) {
    max-height: 100%;
  }

  @media (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    height: 9rem;
    margin-top: 4rem;
    top: 0;
    box-shadow: none;
    padding: 0.938rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    box-shadow: none;
    padding: 0.938rem;
    height: auto;
    border-bottom: 1px solid #ddd;
    scroll-behavior: none;
  }
`;

export const SearchContainer = styled.div`
  margin-bottom: 20px;

  @media (max-width: 1024px) {
  width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 0.2rem;
`;

export const SelectContainer = styled.div`
  select {
    width: 100%;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
`;

export const FilterContainer = styled.div`
  margin-top: 1rem;

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const FilterButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-right: 10px;
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

export const MainContent = styled.div`
  width: 70%;
  max-width: 70%;
  height: 100%;
  margin-left: 25%; 
  padding-top: 1.5rem; 

  @media (max-width: 1024px) {
  padding-top: 2rem; 
  }

  @media (max-width: 360px) {
    margin: auto;
    max-width: 100vh; 
    padding-top: 4rem; 
  }
`;

export const Section = styled.section`
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    margin-top: 5rem;
  }
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
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const CategoryCard = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  width: 16rem;
  margin: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 1rem;
  }

  @media (max-width: 360px) {
    margin: auto;
    max-width: 100vh; 
  }

`;

export const CategoryImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 9rem;
  object-fit: cover;
  border-radius: 4px;
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
`;

export const NoItemsMessage = styled.div`
  font-size: 16px;
  color: #353635;
  margin-top: 20px;
  text-align: center;
`;