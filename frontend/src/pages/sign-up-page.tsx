import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PasswordField from "@/shared/components/password-field";
import { ROUTES } from "@/app/router/router.constants";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleGoToSignIn = () => {
    navigate(ROUTES.signIn);
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
      <Typography variant="h4">Регистрация</Typography>
      <TextField label="Имя" name="name" required fullWidth />
      <TextField label="Фамилия" name="surname" required fullWidth />
      <TextField label="Отчество" name="middleName" fullWidth />
      <TextField label="E-mail" name="email" required fullWidth />
      <PasswordField name="password" label="Пароль" required />
      <PasswordField name="repeat-password" label="Повторите пароль" required />
      <Button variant="contained">Зарегестрироваться</Button>
      <Button variant="text" onClick={handleGoToSignIn}>
        Есть аккаунт
      </Button>
    </Box>
  );
};

export default SignUpPage;
