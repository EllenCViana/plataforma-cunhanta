import { useState } from "react";
import {
  SignupContainer,
  SignupForm,
  Title,
  Input,
  Button,
  ErrorMessage,
  SuccessMessage,
  LinkButton,
} from "./SignUp.styles";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../../firebaseConfig"; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const auth = getAuth(app);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Nome é obrigatório.";
    if (!formData.email) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!formData.password) newErrors.password = "Senha é obrigatória.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        await updateProfile(userCredential.user, { displayName: formData.name });

        setSuccess(true);
        console.log("Usuário cadastrado:", userCredential.user);
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      } catch (error) {
        console.error("Erro ao criar usuário:", error.message);
        setErrors({ email: "O e-mail já está em uso ou inválido." });
      }
    }
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <Title>Cadastre-se</Title>
        {success && <SuccessMessage>Cadastro realizado com sucesso!</SuccessMessage>}
        <Input
          type="text"
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        <Button type="submit">Cadastrar</Button>
        <LinkButton to="/signin">
          Já possui uma conta?
        </LinkButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
