import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;

export const LoginForm = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #333333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 0.0625rem solid #cccccc;
  border-radius: 0.25rem;
  font-size: 1rem;
  &:focus {
    border-color: #5B2668;
    outline: none;
    box-shadow: 0 0 0 0.1875rem rgba(0, 123, 255, 0.25);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #4F1C59;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #5B2668;
  }
`;

export const ErrorMessage = styled.p`
  color: #d9534f;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  width: 100%;
  text-align: left;
`;

export const LinkButton = styled(Link)`
  color: #4F1C59;
  font-size: 0.875rem;
  margin-top: 1rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;