import Form from "@/shared/components/form/form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PasswordField from "@/shared/components/password-field";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/router.constants";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleGoToSignUp = () => {
    navigate(ROUTES.signUp);
  };

  return (
    <Form>
      <Typography variant="h4">Авторизация</Typography>
      <TextField label="E-mail" name="email" required fullWidth />
      <PasswordField name="password" label="Пароль" required />
      <Button variant="contained">Войти</Button>
      <Button variant="text" onClick={handleGoToSignUp}>
        Зарегестрироваться
      </Button>
    </Form>
  );
};

export default SignInPage;
