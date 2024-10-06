import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC, memo } from "react";

import defaultAvatar from "@/assets/img_avatar.png";
import { getBirthDateMask } from "@/shared/utils/get-birth-date-mask";
import Grid from "@mui/material/Grid";

interface ProfileCardProps {
  name: string;
  position: string;
  email: string;
  location: string;
  birthDate: string;
  status: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  name,
  birthDate,
  position,
  email,
}) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia component="img" sx={{ width: 151 }} image={defaultAvatar} />
      <CardContent sx={{ width: "100%" }}>
        <Typography component="div" variant="h4" pb={4}>
          {name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography color="text.secondary">Позиция</Typography>
            <Typography component="div">{position}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="text.secondary">Дата рождения</Typography>
            <Typography component="div">
              {getBirthDateMask(birthDate)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="text.secondary">E-mail</Typography>
            <Typography component="a" href={`mailto:${email}`} target="_blank">
              {email}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default memo(ProfileCard);
