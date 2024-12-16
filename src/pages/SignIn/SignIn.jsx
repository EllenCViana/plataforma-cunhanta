import { useState } from "react";
import {
  LoginContainer,
  LoginForm,
  Title,
  Input,
  Button,
  ErrorMessage,
  LinkButton
} from "./SignIn.styles";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors({ message: "Todos os campos são obrigatórios." });
    } else {
      console.log("Usuário logado:", formData);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Entrar</Title>
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit">Entrar</Button>
        <LinkButton to="/signup">
          Não possui uma conta?
        </LinkButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default SignIn;
