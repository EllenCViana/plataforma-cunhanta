import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactContainer,
  ContactHeader,
  ContactTitle,
  ContactSubtitle,
  ContactForm,
  Label,
  Input,
  TextArea,
  SubmitButton,
  InfoSection,
  InfoItem,
  AcknowledgmentMessage,
  Container
} from "./Contact.styles";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.target);

    emailjs
      .send(
        "service_0o1lkqn",
        "template_oks773u",
        {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        },
        "gefGAeONz7rBaB2xC"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsLoading(false);
          e.target.reset();
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          setErrorMessage(
            "Houve um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde."
          );
          setIsLoading(false);
          console.error("Erro ao enviar e-mail:", error);
        }
      );
  };

  return (
    <>
      <Container>
        <ContactContainer>
          <ContactHeader>
            <ContactTitle>Entre em Contato</ContactTitle>
            <ContactSubtitle>
              Queremos ouvir você! Envie-nos uma mensagem e responderemos em breve.
            </ContactSubtitle>
          </ContactHeader>

          {!isSubmitted ? (
            <ContactForm onSubmit={handleSubmit}>
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome completo"
                required
              />

              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Seu e-mail"
                required
              />

              <Label htmlFor="message">Mensagem</Label>
              <TextArea
                id="message"
                name="message"
                rows="6"
                placeholder="Digite sua mensagem"
                required
              />

              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar"}
              </SubmitButton>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </ContactForm>
          ) : (
            <AcknowledgmentMessage>
              Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso. Responderemos em breve.
            </AcknowledgmentMessage>
          )}

          <InfoSection>
            <InfoItem>
              <strong>E-mail:</strong> <a href="mailto:projetocunhanta@gmail.com">projetocunhanta@gmail.com</a>
            </InfoItem>
            <InfoItem>
              <strong>Endereço:</strong> Rodovia PA 439, N° 257 - Oriximiná, Pará - CEP: 68270-000
            </InfoItem>
          </InfoSection>
        </ContactContainer>
      </Container>
    </>
  );
}

export default Contact;