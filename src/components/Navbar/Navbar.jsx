import { useState, useEffect } from "react";
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

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/home");
  };

  return (
    <NavbarContainer>
      <Logo>
        <img src="/images/education.png" alt="Logo Cunhantã" />
        <h1>Cunhantã++</h1>
      </Logo>
      <HamburgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
      <NavLinks $isOpen={isMenuOpen}>
        <DivNav>
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
        </DivNav>
        {!user ? (
          <>
          <DivNav>
            <NavItem>
              <Button $isOpen={isMenuOpen} onClick={() => navigate("/signup")}>
                Inscreva-se
              </Button>
            </NavItem>
            <NavItem>
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
