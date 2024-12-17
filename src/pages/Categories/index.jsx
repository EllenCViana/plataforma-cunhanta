import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CategoriesContainer,
  Sidebar,
  SearchContainer,
  SearchInput,
  SelectContainer,
  FilterContainer,
  FilterButton,
  MainContent,
  Section,
  SectionTitle,
  CategoryCard,
  CategoryImage,
  CategoryTitle,
  CategoryDescription,
  VideoLink,
  Div,
  NoItemsMessage,
} from "./Categories.styles";

import categoriesData from "../../data/categories.json";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCategories(categoriesData.categories);
  }, []);

  useEffect(() => {
    let itemsToFilter = [];

    // Filtra as categorias e itens
    if (selectedCategory) {
      const selectedCategoryData = categories.find(
        (category) => category.title === selectedCategory
      );
      if (selectedCategoryData) {
        itemsToFilter = selectedCategoryData.subcategories.flatMap(
          (subcategory) => subcategory.items
        );
      }
    } else {
      // Se nenhuma categoria foi selecionada, mostrar todos os itens
      itemsToFilter = categories.flatMap((category) =>
        category.subcategories.flatMap((subcategory) => subcategory.items)
      );
    }

    // Filtra pelo título se houver filtro
    if (selectedFilter !== "Todos") {
      itemsToFilter = itemsToFilter.filter((item) =>
        item.title.toLowerCase().includes(selectedFilter.toLowerCase())
      );
    }

    setFilteredItems(itemsToFilter);
  }, [selectedCategory, selectedFilter, categories]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedFilter("Todos"); // Resetar filtro quando mudar a categoria
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredSearchItems = filteredItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVideoClick = (videoUrl) => {
    const videoId = new URL(videoUrl).searchParams.get("v");
    navigate(`/video/${videoId}`);
  };

  return (
    <CategoriesContainer>
      <Sidebar>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="O que você está buscando?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>

        <SelectContainer>
          <select onChange={handleCategoryChange} value={selectedCategory}>
            <option value="">Todas as Categorias</option>
            {categories.map((category) => (
              <option key={category.title} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </SelectContainer>

        {selectedCategory && (
          <FilterContainer>
            <h4>Filtros:</h4>
            <FilterButton
              active={selectedFilter === "Todos"}
              onClick={() => handleFilterChange("Todos")}
            >
              Todos
            </FilterButton>

            {/* {selectedCategory === "Redação" && (
              <>
                <FilterButton
                  active={selectedFilter === "Dissertação"}
                  onClick={() => handleFilterChange("Dissertação")}
                >
                  Dissertação
                </FilterButton>
              </>
            )} */}

            {selectedCategory === "Desenvolvimento Web Front-End" && (
              <>
                <FilterButton
                  active={selectedFilter === "Html5/Css3"}
                  onClick={() => handleFilterChange("Html5/Css3")}
                >
                  Html5/Css3
                </FilterButton>

                <FilterButton
                  active={selectedFilter === "Javascript/Typescript"}
                  onClick={() => handleFilterChange("Javascript/Typescript")}
                >
                  Javascript/Typescript
                </FilterButton>
              </>
            )}

            {selectedCategory === "Informática" && (
              <>
                <FilterButton
                  active={selectedFilter === "Básica"}
                  onClick={() => handleFilterChange("Básica")}
                >
                  Básica
                </FilterButton>

                <FilterButton
                  active={selectedFilter === "Avançada"}
                  onClick={() => handleFilterChange("Avançada")}
                >
                  Avançada
                </FilterButton>
              </>
            )}
          </FilterContainer>
        )}
      </Sidebar>

      <MainContent>
        <Section>
          {selectedCategory && <SectionTitle>{selectedCategory}</SectionTitle>}
          <Div>
            {filteredSearchItems.length > 0 ? (
              filteredSearchItems.map((item, index) => (
                <CategoryCard key={index}>
                  <CategoryImage
                    src={`/images${item.image}`}
                    alt={item.title}
                  />
                  <CategoryTitle>{item.title}</CategoryTitle>
                  <CategoryDescription>{item.description}</CategoryDescription>
                  <VideoLink
                    href="#"
                    onClick={() => handleVideoClick(item.videoUrl)}
                  >
                    Iniciar Curso
                  </VideoLink>
                </CategoryCard>
              ))
            ) : (
              <NoItemsMessage>Nenhum item encontrado.</NoItemsMessage>
            )}
          </Div>
        </Section>
      </MainContent>
    </CategoriesContainer>
  );
}

export default Categories;
