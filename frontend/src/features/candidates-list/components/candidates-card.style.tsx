import styled from "@emotion/styled";
import Box from "@mui/material/Box/Box";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";

export const CardContainer = styled(Card)`
  display: flex;
  backgroundcolor: #faf7ffb3;
  border-color: #0000001f;
  border-style: solid;
  border-radius: 16px;
  padding-bottom: 12px;
`;

export const CardContentContainer = styled(CardContent)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ButtonContaier = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const CardImage = styled(CardMedia)`
  top: 0;
  left: 0;
  position: absolute;
  margin: 20px;
  width: 70px;
  border-radius: 24px;
  height: 70px;
`;

export const StyledHeaderBox = styled(Box)`
  margin-left: 100px;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-rigth: 12px;
`;
