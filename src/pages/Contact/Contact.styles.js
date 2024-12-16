import styled from "styled-components";

export const Container = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const ContactContainer = styled.div`
  width: 45%;
  max-width: 45%;
  margin-top: 8rem;
  margin-bottom: 4rem;
  padding: 2.5rem 5rem;
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;

  @media (max-width: 1024px) {
    width: 60%;
    max-width: 60%;
    margin-top: 8rem;
  }

  @media (max-width: 360px) {
    width: 90%;
    max-width: 90%;
    margin-top: 5rem;
    padding: 1rem 1.5rem;
  }

`;

export const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 1.875rem;

  @media (max-width: 360px) {
    margin-bottom: 1rem;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 2.4rem;
  color: #353635;

  @media (max-width: 360px) {
    margin: 0;
    font-size: 1.9rem;
  }
`;

export const ContactSubtitle = styled.p`
  font-size: 1rem;
  color: #353635;
  margin-bottom: 1.25rem;
  line-height: 1.6;

  @media (max-width: 360px) {
    margin: 0 auto;
    width: 16rem;
    margin-bottom: 0;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #353635;  
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 0.0625rem solid #ddd;
  border-radius: 0.375rem;
  transition: 0.3s ease;
  margin-bottom: 0.75rem;

  &:focus {
    border-color: #4F1C59;
    outline: none;
    box-shadow: 0 0 0.3125rem #5B2668;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border: 0.0625rem solid #353635;
  border-radius: 0.375rem;
  transition: 0.3s ease;
  margin-bottom: 1.5rem;

  &:focus {
    border-color: #4F1C59;
    outline: none;
    box-shadow: 0 0 0.3125rem #5B2668;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #4F1C59;
  color: #fff;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #5B2668;
  }
`;

export const AcknowledgmentMessage = styled.div`
  padding: 1.25rem;
  text-align: center;
  background-color: #e6ffed;
  color: #2d6a4f;
  border: 0.0625rem solid #c3e6cb;
  border-radius: 0.375rem;
  margin-top: 1.25rem;
`;

export const InfoSection = styled.div`
  margin-top: 1.875rem;
  text-align: center;
  color: #353635;
  font-size: 1rem;
`;

export const InfoItem = styled.p`
  margin: 0.3125rem 0;

  a {
    color: #4F1C59;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
