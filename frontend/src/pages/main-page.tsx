import Header from "@/widgets/header/header";
import Container from "@mui/material/Container";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainPage: FC = () => (
  <>
    <Header />
    <Container sx={{ pt: 8, pb: 8 }}>
      <Outlet />
    </Container>
  </>
);

export default MainPage;
