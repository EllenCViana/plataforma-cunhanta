import HeroSection from "../../components/HeroSection";
import { useState } from "react";
import {
  Main,
  Container,
  Title,
  AboutSection,
  Paragraph,
  AreasSection,
  AreaGrid,
  AreaCard,
  TitleArea,
  FAQSection,
  AreaImage,
  DivArea,
  ParagraphArea,
  Accordion,
  AccordionHeading,
  AccordionButton,
  AccordionBody
} from "./Home.styles";
import Footer from "../../components/Footer";

const Home = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

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
            <AreaCard style={{ border: '2px solid #F68829' }}>
              <DivArea>
                <AreaImage src="/images/frontend.png" alt="frontend" />
                <TitleArea style={{ color: '#F68829' }}>Front-End</TitleArea>
              </DivArea>
              <ParagraphArea>
                Aprenda a criar interfaces de usuário incríveis, focando em HTML, CSS, JavaScript e frameworks como React.
              </ParagraphArea>
            </AreaCard>

            <AreaCard style={{ border: '2px solid #7B71FF' }}>
              <DivArea>
                <AreaImage src="/images/empreendedorismoquilombola.png" alt="empreendedorismo" />
                <TitleArea style={{ color: '#7B71FF' }}>Empreendedorismo Quilombola</TitleArea>
              </DivArea>
              <ParagraphArea>
                Desenvolva habilidades para iniciar e gerenciar negócios locais que valorizem a cultura quilombola e promovam o desenvolvimento econômico.
              </ParagraphArea>
            </AreaCard>

            <AreaCard style={{ border: '2px solid #00C46D' }}>
              <DivArea>
                <AreaImage src="/images/programacao.png" alt="backend" />
                <TitleArea style={{ color: '#00C46D' }}>Back-End</TitleArea>
              </DivArea>
              <ParagraphArea>
                Desenvolva a lógica do lado do servidor, com foco em bancos de dados, APIs, e frameworks como Node.js.
              </ParagraphArea>
            </AreaCard>

            <AreaCard style={{ border: '2px solid #F16165' }}>
              <DivArea>
                <AreaImage src="/images/fullstack.png" alt="fullstack" />
                <TitleArea style={{ color: '#F16165' }}>Full-Stack</TitleArea>
              </DivArea>
              <ParagraphArea>
                Torne-se um desenvolvedor completo, dominando tanto a parte front-end quanto back-end.
              </ParagraphArea>
            </AreaCard>

            <AreaCard style={{ border: '2px solid #96CC3A' }}>
              <DivArea>
                <AreaImage src="/images/negocios.png" alt="gestao" />
                <TitleArea style={{ color: '#96CC3A' }}>Gestão de Cooperativas</TitleArea>
              </DivArea>
              <ParagraphArea>
                Aprenda a organizar e administrar cooperativas, fortalecendo a economia coletiva e sustentável em comunidades quilombolas.
              </ParagraphArea>
            </AreaCard>

            <AreaCard style={{ border: '2px solid #DC6EBE' }}>
              <DivArea>
                <AreaImage src="/images/design.png" alt="design" />
                <TitleArea style={{ color: '#DC6EBE' }}>Design</TitleArea>
              </DivArea>
              <ParagraphArea>
                Aprofunde-se no design de interfaces e experiência do usuário, criando produtos digitais intuitivos.
              </ParagraphArea>
            </AreaCard>

            <AreaCard style={{ border: '2px solid #FFBA05' }}>
              <DivArea>
                <AreaImage src="/images/datascience.png" alt="datascience" />
                <TitleArea style={{ color: '#FFBA05' }}>Data Science</TitleArea>
              </DivArea>
              <ParagraphArea>
                Mergulhe no mundo dos dados, utilizando Python, R e ferramentas de análise para insights valiosos.
              </ParagraphArea>
            </AreaCard>

            <AreaCard style={{ border: '2px solid #68CCF9' }}>
              <DivArea>
                <AreaImage src="/images/inteligenciaartificial.png" alt="IA" />
                <TitleArea style={{ color: '#68CCF9' }}>Inteligência Artificial</TitleArea>
              </DivArea>
              <ParagraphArea>
                Explore os conceitos e técnicas de IA, incluindo aprendizado de máquina e redes neurais.
              </ParagraphArea>
            </AreaCard>
          </AreaGrid>
        </Container>
      </AreasSection>

      <FAQSection>
        <Accordion id="accordion-collapse" data-accordion="collapse">
          <Title>Perguntas Frequentes</Title>

          {/* Accordion 1 */}
          <AccordionHeading id="accordion-collapse-heading-1">
            <AccordionButton
              type="button"
              onClick={() => toggleAccordion(1)}
              aria-expanded={openAccordion === 1}
              aria-controls="accordion-collapse-body-1"
            >
              <span>Como posso me inscrever nos cursos?</span>
              <svg
                data-accordion-icon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </AccordionButton>
          </AccordionHeading>
          <AccordionBody
            id="accordion-collapse-body-1"
            aria-labelledby="accordion-collapse-heading-1"
            isOpen={openAccordion === 1}
          >
            <p>Basta criar uma conta gratuita e acessar os cursos disponíveis na plataforma.</p>
          </AccordionBody>

          {/* Accordion 2 */}
          <AccordionHeading id="accordion-collapse-heading-2">
            <AccordionButton
              type="button"
              onClick={() => toggleAccordion(2)}
              aria-expanded={openAccordion === 2}
              aria-controls="accordion-collapse-body-2"
            >
              <span>Os cursos são realmente gratuitos?</span>
              <svg
                data-accordion-icon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </AccordionButton>
          </AccordionHeading>
          <AccordionBody
            id="accordion-collapse-body-2"
            aria-labelledby="accordion-collapse-heading-2"
            isOpen={openAccordion === 2}
          >
            <p>Sim, todos os cursos são gratuitos e acessíveis para qualquer pessoa interessada.</p>
          </AccordionBody>

          {/* Accordion 3 */}
          <AccordionHeading id="accordion-collapse-heading-3">
            <AccordionButton
              type="button"
              onClick={() => toggleAccordion(3)}
              aria-expanded={openAccordion === 3}
              aria-controls="accordion-collapse-body-3"
            >
              <span>Receberei certificado ao concluir um curso?</span>
              <svg
                data-accordion-icon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </AccordionButton>
          </AccordionHeading>
          <AccordionBody
            id="accordion-collapse-body-3"
            aria-labelledby="accordion-collapse-heading-3"
            isOpen={openAccordion === 3}
          >
            <p>Sim, oferecemos certificados gratuitos para todos os cursos concluídos.</p>
          </AccordionBody>
        </Accordion>
      </FAQSection>
        <Footer />
    </Main>
  );
};

export default Home;