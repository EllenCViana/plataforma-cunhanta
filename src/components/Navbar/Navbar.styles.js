import styled from "styled-components";

export const NavbarContainer = styled.header`
  background: #fff;
  color: #353635;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem 1.5rem;
  position: fixed;
  width: 100%;
  border-bottom: 0.125rem solid #ececec;
  top: 0;

  @media (max-width: 768px) {
    height: 4rem;
  }

  @media (max-width: 360px) {
    justify-content: space-between;
    z-index: 1;
  }

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.4rem;
    font-weight: 100;
    color: #4f1c59;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  img {
    height: 2.125rem;
    margin-right: 0.75rem;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: 10rem;
    position: fixed;
    background-color: #fff;
    top: 4rem;
    justify-content: center;
    align-items: center;
    left: 0;
    box-shadow: 0 0.5rem 1rem rgba(53, 54, 53, 0.5);
    z-index: 1;
  }
`;

export const NavItem = styled.li`
  margin: 0 1.5rem;
  text-align: center;

  a {
    color: #353635;
    text-decoration: none;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0.1875rem;
      background-color: #4f1c59;
      transition: width 0.3s ease-in-out;
      margin: auto;
      margin-top: 0.25rem;
    }

    &:hover::after {
      width: 100%;
      background-color: #5b2668;
    }
  }

  .active::after {
    width: 100%;
    background-color: #5b2668;
  }
`;

export const ButtonContainer = styled.div`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.className === "btn" ? "#fff" : "#4f1c59")};
  border: 0.0625rem solid ${(props) => (props.className === "btn" ? "#4f1c59" : "transparent")};
  color: ${(props) => (props.className === "btn" ? "#4f1c59" : "#fff")};
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  border-radius: 0.3125rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.className === "btn" ? "#f8f8f8" : "#5b2668")};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 1.4rem;
  width: 2rem;

  span {
    background-color:rgb(89, 89, 89);
    height: 0.25rem;
    width: 100%;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;