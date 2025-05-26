import HeroSection from "../../components/HeroSection";
import { useState } from "react";
import {
  Main,
  Container,
  Title,
  AreasSection,
  AreaGrid,
  AreaCard,
  TitleArea,
  FAQSection,
  ParagraphArea,
  Accordion,
  AccordionHeading,
  AccordionButton,
  AccordionBody
} from "./Home.styles";
import Footer from "../../components/Footer";
import CourseCardSection from '../../components/Cursos';

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

      <Container>
      <CourseCardSection />
      </Container>

      <AreasSection id="areas">
        <Container>
          <Title>Áreas de Especialização</Title>
          <AreaGrid>
            <AreaCard>
                <TitleArea>Alfabetização Digital</TitleArea>
              <ParagraphArea>
              Aprenda os conceitos básicos de tecnologia, como usar o computador e navegar com segurança na internet.
              </ParagraphArea>
            </AreaCard>

            <AreaCard>
                <TitleArea>Uso Básico de Computadores</TitleArea>
              <ParagraphArea>
              Descubra como organizar arquivos, instalar programas e realizar tarefas essenciais no computador.
              </ParagraphArea>
            </AreaCard>

            <AreaCard>
                <TitleArea>Internet e Redes Sociais</TitleArea>
              <ParagraphArea>
              Aprenda a navegar na internet, criar contas em redes sociais e se comunicar com segurança online.
              </ParagraphArea>
            </AreaCard>

            <AreaCard>
                <TitleArea>Ferramentas de Escritório</TitleArea>
              <ParagraphArea>
              Desenvolva habilidades com Word, Excel e PowerPoint para impulsionar sua produtividade.
              </ParagraphArea>
            </AreaCard>

            <AreaCard>
                <TitleArea>Comunicação Digital</TitleArea>
              <ParagraphArea>
              Aprenda a enviar e-mails, fazer videochamadas e se comunicar de forma clara no ambiente digital.
              </ParagraphArea>
            </AreaCard>

            <AreaCard>
                <TitleArea>Criação de Conteúdo Digital</TitleArea>
              <ParagraphArea>
              Descubra como criar posts, banners e vídeos para redes sociais utilizando ferramentas simples.
              </ParagraphArea>
            </AreaCard>

            <AreaCard>
                <TitleArea>Introdução a Programação</TitleArea>
              <ParagraphArea>
              Explore os conceitos fundamentais da programação e desenvolva suas primeiras páginas web.
              </ParagraphArea>
            </AreaCard>

            <AreaCard>
                <TitleArea>Empreendedorismo Digital</TitleArea>
              <ParagraphArea>
              Descubra como criar seu próprio negócio digital e atrair clientes pela internet.
              </ParagraphArea>
            </AreaCard>

            <AreaCard>
                <TitleArea>Seguramça Digital e Privacidade</TitleArea>
              <ParagraphArea>
              Aprenda como proteger seus dados e dispositivos contra golpes e ataques cibernéticos.
              </ParagraphArea>
            </AreaCard>

            <AreaCard>
                <TitleArea>Trabalho Remoto e Colaboração Online</TitleArea>
              <ParagraphArea>
              Descubra ferramentas e práticas para colaborar de forma produtiva no ambiente digital.
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