import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PasswordField from "@/shared/components/password-field";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/router.constants";
import Box from "@mui/material/Box";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleGoToSignUp = () => {
    navigate(ROUTES.signUp);
  };

  return (
    <Box
      p={6}
      width="420px"
      display="flex"
      flexDirection="column"
      gap={4}
      mx="auto"
      boxShadow={4}
    >
      <Typography variant="h4">Авторизация</Typography>
      <TextField label="E-mail" name="email" required fullWidth />
      <PasswordField name="password" label="Пароль" required />
      <Button variant="contained">Войти</Button>
      <Button variant="text" onClick={handleGoToSignUp}>
        Зарегестрироваться
      </Button>
    </Box>
  );
};

export default SignInPage;
