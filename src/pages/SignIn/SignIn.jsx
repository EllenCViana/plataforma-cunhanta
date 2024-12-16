import { useState } from "react";
import {
  LoginContainer,
  LoginForm,
  Title,
  Input,
  Button,
  ErrorMessage,
  SuccessMessage,
  LinkButton
} from "./SignIn.styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../firebaseConfig";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors({ message: "Todos os campos são obrigatórios." });
      return;
    }

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Usuário logado com sucesso:", userCredential.user);

      setErrors({});
      setSuccessMessage("Você está logado com sucesso!");
      navigate("/home");
    } catch (error) {
      console.error("Erro ao logar:", error.message);
      if (error.code === "auth/user-not-found") {
        setErrors({ message: "Usuário não encontrado. Verifique o e-mail." });
      } else if (error.code === "auth/wrong-password") {
        setErrors({ message: "Senha incorreta. Tente novamente." });
      } else {
        setErrors({ message: "Erro ao fazer login. Tente novamente." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Entrar</Title>
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>} {/* Exibe mensagem de sucesso */}
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
        <Button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
        <LinkButton to="/signup">Não possui uma conta?</LinkButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default SignIn;
