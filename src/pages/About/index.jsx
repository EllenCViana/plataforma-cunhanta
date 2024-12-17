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
  Image
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
            <Card  style={{ border: '1px solid #cdcdcd' }}>
            <Image src="/images/mission.png" alt="mission" />
              <h3>Missão</h3>
              <p>
                Oferecer educação acessível e culturalmente relevante para
                comunidades quilombolas, preservando tradições e empoderando o
                aprendizado coletivo.
              </p>
            </Card>
            <Card  style={{ border: '1px solid #cdcdcd' }}>
            <Image src="/images/vision.png" alt="vision" />
              <h3>Visão</h3>
              <p>
                Ser a principal plataforma de educação quilombola no Brasil,
                reconhecida pela qualidade e impacto positivo nas comunidades.
              </p>
            </Card>
            <Card  style={{ border: '1px solid #cdcdcd' }}>
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
            <HighlightCard style={{ border: '2px solid #7B71FF', boxShadow: '0 0.25rem 0.75rem rgba(122, 113, 255, 0.4)' }}>
              <Image src="/images/webinar.png" alt="acessibilidade" />
              <h3>Acessibilidade</h3>
              <p>
                Plataforma otimizada para comunidades rurais com acesso limitado
                à internet.
              </p>
            </HighlightCard>
            <HighlightCard style={{ border: '2px solid #68CCF9', boxShadow: '0 0.25rem 0.75rem rgba(104, 203, 249, 0.4)' }}>
              <Image src="/images/connection.png" alt="conexao comunitaria" />
              <h3>Conexão Comunitária</h3>
              <p>
                Conteúdos criados por e para as comunidades quilombolas, com
                foco em suas necessidades.
              </p>
            </HighlightCard>
            <HighlightCard style={{ border: '2px solid #DC6EBE', boxShadow: '0 0.25rem 0.75rem rgba(220, 110, 191, 0.4)' }}>
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
