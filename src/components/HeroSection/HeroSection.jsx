import { HeroHome, HeroText, HeroButton } from "./HeroSection.styles";

const HeroSection = () => {
  return (
    <HeroHome>
      <div className="container">
        <HeroText>
          <h1>Fortalecendo Comunidades Através da Educação</h1>
          <p>
            Descubra cursos interativos, criados para preservar a cultura e impulsionar o desenvolvimento das comunidades quilombolas.
          </p>
          <HeroButton href="/categories">Explore os Cursos</HeroButton>
        </HeroText>
      </div>
    </HeroHome>
  );
};

export default HeroSection;