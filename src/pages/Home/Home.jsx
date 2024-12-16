import HeroSection from "../../components/HeroSection/HeroSection";
import {
  Main,
  Container,
  Title,
  AboutSection,
  Paragraph,
  AreasSection,
  AreaGrid,
  AreaCard,
  TitleCard,
  FAQAnswer,
  FAQItem,
  FAQQuestion,
  FAQSection
} from "./Home.styles";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  return (
    <Main>
      <HeroSection
        title="Fortalecendo Comunidades Através da Educação"
        description="Descubra cursos interativos, criados para preservar a cultura e impulsionar o desenvolvimento das comunidades quilombolas."
        buttonText="Explore os Cursos"
        link="#courses"
      />

      <AboutSection id="about">
        <Container>
          <Title>Sobre Nós</Title>
          <Paragraph>
            Somos uma plataforma dedicada a oferecer educação acessível e gratuita para comunidades quilombolas, com o objetivo de preservar suas tradições e impulsionar o aprendizado coletivo.
          </Paragraph>
        </Container>
      </AboutSection>

      <AreasSection id="areas">
        <Container>
          <Title>Áreas de Especialização</Title>
          <AreaGrid>
            <AreaCard>
              <TitleCard>Front-End</TitleCard>
              <Paragraph>
                Aprenda a criar interfaces de usuário incríveis, focando em HTML, CSS, JavaScript e frameworks como React.
              </Paragraph>
            </AreaCard>
            <AreaCard>
              <TitleCard>Empreendedorismo Quilombola</TitleCard>
              <Paragraph>
                Desenvolva habilidades para iniciar e gerenciar negócios locais que valorizem a cultura quilombola e promovam o desenvolvimento econômico.
              </Paragraph>
            </AreaCard>
            <AreaCard>
              <TitleCard>Back-End</TitleCard>
              <Paragraph>
                Desenvolva a lógica do lado do servidor, com foco em bancos de dados, APIs, e frameworks como Node.js.
              </Paragraph>
            </AreaCard>
            <AreaCard>
              <TitleCard>Full-Stack</TitleCard>
              <Paragraph>
                Torne-se um desenvolvedor completo, dominando tanto a parte front-end quanto back-end.
              </Paragraph>
            </AreaCard>
            <AreaCard>
              <TitleCard>Gestão de Cooperativas</TitleCard>
              <Paragraph>
                Aprenda a organizar e administrar cooperativas, fortalecendo a economia coletiva e sustentável em comunidades quilombolas.
              </Paragraph>
            </AreaCard>
            <AreaCard>
              <TitleCard>Design</TitleCard>
              <Paragraph>
                Aprofunde-se no design de interfaces e experiência do usuário, criando produtos digitais intuitivos.
              </Paragraph>
            </AreaCard>
            <AreaCard>
              <TitleCard>Data Science</TitleCard>
              <Paragraph>
                Mergulhe no mundo dos dados, utilizando Python, R e ferramentas de análise para insights valiosos.
              </Paragraph>
            </AreaCard>
            <AreaCard>
              <TitleCard>Inteligência Artificial</TitleCard>
              <Paragraph>
                Explore os conceitos e técnicas de IA, incluindo aprendizado de máquina e redes neurais.
              </Paragraph>
            </AreaCard>
          </AreaGrid>
        </Container>
      </AreasSection>

      <FAQSection>
        <Container>
          <Title>Perguntas Frequentes</Title>
          <FAQItem>
            <FAQQuestion>Como posso me inscrever nos cursos?</FAQQuestion>
            <FAQAnswer>Basta criar uma conta gratuita e acessar os cursos disponíveis na plataforma.</FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>Os cursos são realmente gratuitos?</FAQQuestion>
            <FAQAnswer>Sim, todos os cursos são gratuitos e acessíveis para qualquer pessoa interessada.</FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>Receberei certificado ao concluir um curso?</FAQQuestion>
            <FAQAnswer>Sim, oferecemos certificados gratuitos para todos os cursos concluídos.</FAQAnswer>
          </FAQItem>
        </Container>
      </FAQSection>
      <Footer />
    </Main>
  );
};

export default Home;
