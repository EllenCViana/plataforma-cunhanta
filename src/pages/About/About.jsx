import {
  HeroSection,
  HeroTitle,
  HeroParagraph,
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
} from "./About.styles";

function About() {
  return (
    <>
      <HeroSection>
        <div className="container">
          <HeroTitle>Conheça o Cunhantã++</HeroTitle>
          <HeroParagraph>
            Uma plataforma de e-learning criada para transformar a educação
            quilombola, conectando tradição e inovação.
          </HeroParagraph>
        </div>
      </HeroSection>

      <MissionSection>
        <div className="container">
          <SectionTitle>Missão, Visão e Valores</SectionTitle>
          <Grid>
            <Card>
              <h3>Missão</h3>
              <p>
                Oferecer educação acessível e culturalmente relevante para
                comunidades quilombolas, preservando tradições e empoderando o
                aprendizado coletivo.
              </p>
            </Card>
            <Card>
              <h3>Visão</h3>
              <p>
                Ser a principal plataforma de educação quilombola no Brasil,
                reconhecida pela qualidade e impacto positivo nas comunidades.
              </p>
            </Card>
            <Card>
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
              <img src="/images/webinar.png" alt="Acessibilidade" />
              <h3>Acessibilidade</h3>
              <p>
                Plataforma otimizada para comunidades rurais com acesso limitado
                à internet.
              </p>
            </HighlightCard>
            <HighlightCard>
              <img src="/images/connection.png" alt="Conexão Comunitária" />
              <h3>Conexão Comunitária</h3>
              <p>
                Conteúdos criados por e para as comunidades quilombolas, com
                foco em suas necessidades.
              </p>
            </HighlightCard>
            <HighlightCard>
              <img src="/images/futuro-digital.png" alt="Tradição e Inovação" />
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
