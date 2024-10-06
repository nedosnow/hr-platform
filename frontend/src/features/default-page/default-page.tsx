import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import {
  StyledContainer,
  StyledCard,
  StyledBox,
  ButtonContainer,
} from "./default-page.style";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/router.constants";

const DefaultPage = () => {
  const navigate = useNavigate();

  const handleGoToSignIn = () => {
    navigate(ROUTES.signIn);
  };
  const handleGoToSignUp = () => {
    navigate(ROUTES.signUp);
  };
  return (
    <StyledContainer maxWidth="sm">
      <StyledCard>
        <StyledBox>
          <Typography color={"#ffff"} variant="h1" component="h2">
            Space team
          </Typography>
          <ButtonContainer>
            <Button
              color="info"
              onClick={handleGoToSignIn}
              size="large"
              variant="contained"
            >
              Войти
            </Button>
            <Button
              color="info"
              onClick={handleGoToSignUp}
              size="large"
              variant="outlined"
            >
              Зарегистрироваться
            </Button>
          </ButtonContainer>
        </StyledBox>
      </StyledCard>
    </StyledContainer>
  );
};

export default DefaultPage;
