import { GalleryContainer, GalleryTitle, GalleryGrid, GalleryItem, GalleryImage, GalleryDescription } from "./Galeria.styles";

const Galeria = () => {
  return (
    <GalleryContainer>
      <GalleryTitle>Galeria de Imagens</GalleryTitle>
      <GalleryGrid>
        <GalleryItem>
          <GalleryImage src="path/to/image1.jpg" alt="Imagem 1" />
          <GalleryDescription>Descrição da imagem 1 - Cultura Amazônica</GalleryDescription>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage src="path/to/image2.jpg" alt="Imagem 2" />
          <GalleryDescription>Descrição da imagem 2 - Artesanato local</GalleryDescription>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage src="path/to/image3.jpg" alt="Imagem 3" />
          <GalleryDescription>Descrição da imagem 3 - Encontros comunitários</GalleryDescription>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage src="path/to/image4.jpg" alt="Imagem 4" />
          <GalleryDescription>Descrição da imagem 4 - Paisagens da Amazônia</GalleryDescription>
        </GalleryItem>
        {/* Adicione mais itens conforme necessário */}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Galeria;
