import styled from "styled-components";

// Container principal da Galeria
export const GalleryContainer = styled.section`
  background-color: #fff;
  color: #353635;
  padding: 100px 20px;
  text-align: center;
  font-family: "Arial", sans-serif;
`;

// Título da Galeria
export const GalleryTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #ff8c00;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Grid de imagens
export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
`;

// Item da galeria
export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

// Imagem da galeria
export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
  
  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

// Descrição da imagem
export const GalleryDescription = styled.p`
  position: absolute;
  bottom: 15px;
  left: 20px;
  right: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 8px;
  display: none;

  ${GalleryItem}:hover & {
    display: block;
  }
`;
