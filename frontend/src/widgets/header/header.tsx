import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { PAGES } from "./header.constants";
import Container from "@mui/material/Container";
import HeaderLogo from "./components/header-logo/header-logo";
import HeaderMenu from "./components/header-menu/header-menu";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/router.constants";
import { Box } from "@mui/material";

const Header: FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate(ROUTES.signIn);
  };

  const handleSignUp = () => {
    navigate(ROUTES.signUp);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderLogo />
          <HeaderMenu pages={PAGES} />

          <Box
            sx={{
              display: "flex",
              gap: 3,
            }}
          >
            <Button variant="contained" onClick={handleSignIn}>
              Войти
            </Button>
            <Button variant="contained" onClick={handleSignUp}>
              Зарегестрироваться
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
