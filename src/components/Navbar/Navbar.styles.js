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
  z-index: 1000;

  @media (max-width: 1024px) {
    padding: 1rem 1.25rem;
  }

  @media (max-width: 768px) {
    height: 4rem;
    padding: 0.8rem 1rem;
  }

  @media (max-width: 480px) {

    height: auto;
    align-items: flex-start;
  }

  @media (max-width: 360px) {
    padding: 0.6rem 0.8rem;
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

    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  img {
    height: 2.125rem;
    margin-right: 0.75rem;

    @media (max-width: 768px) {
      height: 1.75rem;
    }

    @media (max-width: 480px) {
      height: 1.5rem;
    }
  }
`;

export const DivNav = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  width: 64%;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: auto;
    position: fixed;
    background-color: #fff;
    top: 4rem;
    left: 0;
    box-shadow: 0 0.5rem 1rem rgba(53, 54, 53, 0.5);
    padding: 1rem 0;
    z-index: 1;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0;
  }
`;

export const NavItem = styled.li`
  margin: 0 1.2rem;
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

  @media (max-width: 1024px) {
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    margin: 0 1.2rem;
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
  width: ${(props) => (props.$isOpen ? "80%" : "auto")};
  text-align: center;

  &:hover {
    background-color: ${(props) => (props.className === "btn" ? "#f8f8f8" : "#5b2668")};
  }

  @media (max-width: 1024px) {
    font-size: 0.85rem;
    padding: 0.6rem 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;
  }

  @media (max-width: 480px) {
    width: 10rem;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    padding: 0.4rem 0.8rem;
  }
`;

export const ButtonUser = styled(Button)`
  font-weight: bold;
  background-color: transparent;
  color: #000;

  &:hover {
    background-color: transparent;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 2rem;
  width: 2rem;

  span {
    background-color: rgb(89, 89, 89);
    height: 0.25rem;
    width: 100%;
    border-radius: 5px;
  }

  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-width: 768px) {
    height: 1.2rem;
    width: 1.8rem;
  }

  @media (max-width: 480px) {
    height: 1.5rem;
    width: 1.8rem;
  }
  @media (max-width: 360px) {
    height: 1.2rem;
    width: 1.4rem;
  }
`;
