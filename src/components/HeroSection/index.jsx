import { HeroHome, HeroText, HeroButton } from "./HeroSection.styles";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <HeroHome>
      <div className="container">
        <HeroText>
          <h1>Fortalecendo Comunidades Através da Educação</h1>
          <p>
            Descubra cursos interativos, criados para preservar a cultura e impulsionar o desenvolvimento das comunidades quilombolas.
          </p>
          <HeroButton as={Link} to="/categories">Explore os Cursos</HeroButton>
        </HeroText>
      </div>
    </HeroHome>
  );
};

export default HeroSection;