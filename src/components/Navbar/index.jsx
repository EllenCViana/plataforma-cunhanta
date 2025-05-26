import { useState, useEffect, useRef } from "react";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  Button,
  ButtonUser,
  HamburgerIcon,
  NavItem,
  DivNav
} from "./Navbar.styles";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../firebaseConfig";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const navbarRef = useRef(null); // Ref para identificar cliques fora da navbar

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/home");
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false); // Fecha o menu ao clicar em um item
  };

  return (
    <NavbarContainer ref={navbarRef}>
      <Logo>
        <img src="/images/CUNHANTA.png" alt="Logo Cunhantã" />
      </Logo>
      <HamburgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
      <NavLinks $isOpen={isMenuOpen}>
        <DivNav>
          <NavItem onClick={handleNavItemClick}>
            <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
              Início
            </NavLink>
          </NavItem>
          <NavItem onClick={handleNavItemClick}>
            <NavLink to="/categories" className={({ isActive }) => (isActive ? "active" : "")}>
              Cursos
            </NavLink>
          </NavItem>
          <NavItem onClick={handleNavItemClick}>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              Sobre
            </NavLink>
          </NavItem>
          <NavItem onClick={handleNavItemClick}>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contato
            </NavLink>
          </NavItem>
        </DivNav>
        {!user ? (
          <>
            <DivNav>
              <NavItem onClick={handleNavItemClick}>
                <Button $isOpen={isMenuOpen} onClick={() => navigate("/signup")}>
                  Inscreva-se
                </Button>
              </NavItem>
              <NavItem onClick={handleNavItemClick}>
                <Button $isOpen={isMenuOpen} className="btn-solid" onClick={() => navigate("/signin")}>
                  Entrar
                </Button>
              </NavItem>
            </DivNav>
          </>
        ) : (
          <NavItem>
            <ButtonUser $isOpen={isMenuOpen} onClick={handleLogout} className="btn-solid">
              {user.displayName} (Sair)
            </ButtonUser>
          </NavItem>
        )}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;