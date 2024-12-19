import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CategoriesContainer,
  SearchInput,
  SelectContainer,
  FilterContainer,
  FilterButton,
  Section,
  SectionTitle,
  CategoryCard,
  CategoryImage,
  CategoryTitle,
  CategoryDescription,
  VideoLink,
  Div,
  NoItemsMessage,
  DivSearchVideo
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
      itemsToFilter = categories.flatMap((category) =>
        category.subcategories.flatMap((subcategory) => subcategory.items)
      );
    }

    if (selectedFilter !== "Todos") {
      itemsToFilter = itemsToFilter.filter((item) =>
        item.title.toLowerCase().includes(selectedFilter.toLowerCase())
      );
    }

    setFilteredItems(itemsToFilter);
  }, [selectedCategory, selectedFilter, categories]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedFilter("Todos");
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
          <DivSearchVideo>
            <SearchInput
              type="text"
              placeholder="Pesquise por um curso..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
          </DivSearchVideo>

        {selectedCategory && (
          <FilterContainer>
            <h4>Filtros:</h4>
            <FilterButton
              active={selectedFilter === "Todos"}
              onClick={() => handleFilterChange("Todos")}
            >
              Todos
            </FilterButton>

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
    </CategoriesContainer>
  );
}

export default Categories;
