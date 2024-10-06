import Container from "@mui/material/Container/Container";
import styled from "@emotion/styled";
import Card from "@mui/material/Card/Card";
import { Box } from "@mui/material";

export const StyledContainer = styled(Container)`
  background-image: url(/src/assets/7.46.45.jpg);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  max-width: none !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledCard = styled(Card)`
  background-color: #24162300;
  display: flex;
  position: absolute;
  top: 140px;
  left: 250px;
  box-shadow: none !important;
`;

export const StyledBox = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  button {
    border-radius: 12px;
    height: 50px;
  }
`;
