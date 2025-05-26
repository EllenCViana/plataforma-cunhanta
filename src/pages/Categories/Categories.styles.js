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

export const Header = styled.header`
text-align: center;
margin-bottom: 50px;
background-color: #fff;

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

  @media (max-width: 480px) {
    width: 60%;
  }

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

  @media (max-width: 480px) {
    width: 36%;
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
  background-color: ${(props) => (props.active ? "#E61D3F" : "#E61D3F")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#E61D3F" : "#E61D3F")};
  }
`;



export const Section = styled.section`
  margin-top: 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    margin-top: 1rem;
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

  @media (max-width: 360px) {
    font-size: 1.25rem;
  }
`;

export const Div = styled.div`
   display: grid;
 gap: 30px;
 width: 100%;
  @media (max-width: 768px) {
    gap: 1.2rem;
  }
`;

export const CategoryCard = styled.div`

background-color: #fff;
border-radius: 8px;
 box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
transition: transform 0.3s ease, box-shadow 0.3s ease;
 cursor: pointer;

 &:hover {
   transform: translateY(-10px);
   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    width: 16rem;
  }

  @media (max-width: 768px) {
    width: 12rem;
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 100%;

  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

 export const CategoryImage = styled.img`
  width: 100%;
   height: 14rem;
  object-fit: cover;
  border-bottom: 4px solid #E61D3F;
 `;

export const CategoryTitle = styled.h3`
   font-size: 1.5rem;
  font-weight: 600;
   color: #2a2d34;
   margin: 15px 20px;
 `;

 export const CategoryDescription = styled.p`
  font-size: 1rem;
   color: #666;
   margin: 0 20px 20px;
 `;

   export const CategoryButton = styled.button`
background-color: #E61D3F;
   color: #fff;
  padding: 12px 25px;
  font-size: 1rem;
   font-weight: bold;
   border: none;
  border-radius: 30px;
   margin: 0 20px 20px;
  cursor: pointer;
   transition: background-color 0.3s ease;

  &:hover {
    background-color: #E61D3F;
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

// import styled from "styled-components";

// export const CoursesContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 60px 20px;
//   background-color: #fff;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// export const Header = styled.header`
//   text-align: center;
//   margin-bottom: 50px;
//   background-color: #fff;

//   h1 {
//     font-size: 3rem;
//     font-weight: bold;
//     color: #ff8c00;
//     margin-bottom: 10px;
//   }

//   p {
//     font-size: 1.2rem;
//     color: #353635;
//     max-width: 800px;
//     margin: 0 auto;
//   }
// `;

// export const CoursesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 30px;
//   width: 100%;
// `;

// export const CourseCard = styled.div`
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
//   }
// `;

// export const CourseImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-bottom: 4px solid #ff8c00;
// `;

// export const CourseTitle = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: #2a2d34;
//   margin: 15px 20px;
// `;

// export const CourseDescription = styled.p`
//   font-size: 1rem;
//   color: #666;
//   margin: 0 20px 20px;
// `;

// export const CourseButton = styled.button`
//   background-color: #ff8c00;
//   color: #fff;
//   padding: 12px 25px;
//   font-size: 1rem;
//   font-weight: bold;
//   border: none;
//   border-radius: 30px;
//   margin: 0 20px 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #ffd700;
//   }
// `;
