import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function MediaControlCard() {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?size=626&ext=jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ flexGrow: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Иванов Иван Иванович
          </Typography>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Жабаскрипт разработчик
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Жабаскрипт разработчик
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Жабаскрипт разработчик
            </Typography>
          </CardContent>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <Button variant="contained">уХеллоу</Button>
        <Button variant="contained">уХеллоу</Button>
      </Box>
    </Card>
  );
}
