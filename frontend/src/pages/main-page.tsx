import Header from "@/widgets/header/header";
import Container from "@mui/material/Container";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainPage: FC = () => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
  </>
);

export default MainPage;
