import {
  Header,
  MissionSection,
  SectionTitle,
  Grid,
  Card,
  HighlightsSection,
  HighlightCard,
  TeamSection,
  TeamGrid,
  TeamMember,
  TeamImage,
  Image
} from "./About.styles";

function About() {
  return (
    <>
      <Header>
          <h1>Sobre o Projeto</h1>
          <p>
          Somos uma plataforma dedicada a oferecer educação acessível e gratuita para comunidades quilombolas, com o objetivo de preservar suas tradições e impulsionar o aprendizado coletivo.
          </p>
      </Header>

      <MissionSection>
        <div className="container">
          <SectionTitle>Missão, Visão e Valores</SectionTitle>
          <Grid>
            <Card>
            <Image src="/images/mission.png" alt="mission" />
              <h3>Missão</h3>
              <p>
                Oferecer educação acessível e culturalmente relevante para
                comunidades quilombolas, preservando tradições e empoderando o
                aprendizado coletivo.
              </p>
            </Card>
            <Card>
            <Image src="/images/vision.png" alt="vision" />
              <h3>Visão</h3>
              <p>
                Ser a principal plataforma de educação quilombola no Brasil,
                reconhecida pela qualidade e impacto positivo nas comunidades.
              </p>
            </Card>
            <Card>
            <Image src="/images/values.png" alt="values" />
              <h3>Valores</h3>
              <ul>
                <li>Respeito às raízes culturais</li>
                <li>Inclusão e diversidade</li>
                <li>Inovação em educação</li>
                <li>Sustentabilidade</li>
              </ul>
            </Card>
          </Grid>
        </div>
      </MissionSection>

      <HighlightsSection>
        <div className="container">
          <SectionTitle>Por Que Escolher o Cunhantã++?</SectionTitle>
          <Grid>
            <HighlightCard>
              <Image src="/images/webinar.png" alt="acessibilidade" />
              <h3>Acessibilidade</h3>
              <p>
                Plataforma otimizada para comunidades rurais com acesso limitado
                à internet.
              </p>
            </HighlightCard>
            <HighlightCard>
              <Image src="/images/connection.png" alt="conexao comunitaria" />
              <h3>Conexão Comunitária</h3>
              <p>
                Conteúdos criados por e para as comunidades quilombolas, com
                foco em suas necessidades.
              </p>
            </HighlightCard>
            <HighlightCard>
              <Image src="/images/futuro-digital.png" alt="tradicao e inovacao" />
              <h3>Tradição e Inovação</h3>
              <p>
                Preservamos o patrimônio cultural enquanto promovemos o futuro
                digital.
              </p>
            </HighlightCard>
          </Grid>
        </div>
      </HighlightsSection>

      <TeamSection>
        <div className="container">
          <SectionTitle>Nossa Equipe</SectionTitle>
          <TeamGrid>
            <TeamMember>
              <TeamImage src="/images/flavia.png" alt="Flávia Monteiro" />
              <h3>Flávia Monteiro</h3>
              <p>
                Doutora em Engenharia Elétrica e Coordenadora do projeto
                Cunhantã++.
              </p>
            </TeamMember>
            <TeamMember>
              <TeamImage src="/images/ellen.jpeg" alt="Ellen Viana" />
              <h3>Ellen Viana</h3>
              <p>
                Discente do curso de Bacharelado em Sistemas de Informação e
                Bolsista do projeto Cunhantã++.
              </p>
            </TeamMember>
          </TeamGrid>
        </div>
      </TeamSection>
    </>
  );
}

export default About;
