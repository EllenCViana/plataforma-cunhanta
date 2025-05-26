import { HeroHome, HeroTitle, HeroCaption, HeroButton, HeroImage } from "./HeroSection.styles";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <HeroHome> 
          <HeroTitle>Bem-vindo(a) ao Cunhantã++</HeroTitle>
          <HeroCaption>
          Transforme seu futuro com educação digital! Explore nossos cursos gratuitos e comece sua jornada tecnológica hoje.
          </HeroCaption>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <HeroImage  src="/images/animation.gif" alt="Animação educativa" />
        <HeroButton as={Link} to="/categories">Explore os Cursos</HeroButton>
        <HeroImage  className="inverted" src="/images/animation.gif" alt="Animação invertida" />
      </div>
    </HeroHome>
  );
};

export default HeroSection;