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
`;

export const CardContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContaier = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const CardImage = styled(CardMedia)`
  height: 170px;
  border-radius: 0 0 30px 0;
`;
