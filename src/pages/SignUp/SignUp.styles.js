import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f8f9fa;
`;

export const SignupForm = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: #343a40;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 0.0625rem solid #ced4da;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #495057;

  &:focus {
    outline: none;
    border-color: #4f1c59;
    box-shadow: 0 0 0 0.2rem rgba(76, 124, 255, 0.25);
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  background: #4f1c59;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #5b2668;
  }

  &:active {
    background: #5b2668;
  }
`;

export const ErrorMessage = styled.span`
  color: #e63946;
  font-size: 0.875rem;
`;

export const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  border: 0.0625rem solid #c3e6cb;
  border-radius: 0.25rem;
  padding: 0.75rem;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

export const LinkButton = styled(Link)`
  text-align: center;
  color: #4f1c59;
  font-size: 0.875rem;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
