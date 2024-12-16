import { useState } from "react";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  ButtonContainer,
  Button,
  HamburgerIcon,
  NavItem,
} from "./Navbar.styles";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>
        <img src="/images/education.png" alt="Logo Cunhantã" />
        <h1>Cunhantã++</h1>
      </Logo>
      <NavLinks $isOpen={isMenuOpen}>
        <NavItem>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
            Início
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/categories" className={({ isActive }) => (isActive ? "active" : "")}>
            Categorias
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            Sobre
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contato
          </NavLink>
        </NavItem>
      </NavLinks>
      <ButtonContainer>
        <Button $isOpen={isMenuOpen} onClick={() => navigate("/signup")}>Inscreva-se</Button>
        <Button $isOpen={isMenuOpen} className="btn-solid" onClick={() => navigate("/signin")}>
          Entrar
        </Button>
      </ButtonContainer>
      <HamburgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
    </NavbarContainer>
  );
};

export default Navbar;
