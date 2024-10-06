import {
  CardMedia,
  Box,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import {
  ButtonContaier,
  CardContainer,
  CardContentContainer,
} from "./candidates-card.style";

type User = {
  name: string;
  surname: string;
  middleName: string;
  avatar: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  role: string;
  status: string;
};

const CandidatesCard = ({ user }: { user: User }) => {
  const {
    name,
    surname,
    middleName,
    avatar,
    dateOfBirth,
    email,
    phoneNumber,
    role,
    status,
  } = user;

  return (
    <CardContainer>
      <CardMedia
        component="img"
        sx={{
          margin: "20px",
          width: "160px",
          borderRadius: "24px",
          height: "200px",
        }}
        image={avatar}
        alt="Live from space album cover"
      />

      <CardContentContainer>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="subtitle1">
              {`${surname} ${name} ${middleName}`}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Typography
                component="div"
                variant="subtitle1"
                sx={{ color: "text.secondary" }}
              >
                {role}
              </Typography>
              <Chip variant="outlined" color="primary" label={status} />
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                Дата рождения: {dateOfBirth}
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                e-mail: {email}
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                Телефон: {phoneNumber}
              </Typography>
            </Box>
          </CardContent>
        </Box>
        <ButtonContaier>
          <Button
            size="large"
            sx={{ borderRadius: "12px" }}
            variant="contained"
          >
            уХеллоу
          </Button>
          <Button size="large" sx={{ borderRadius: "12px" }} variant="outlined">
            уХеллоу
          </Button>
        </ButtonContaier>
      </CardContentContainer>
    </CardContainer>
  );
};

export default CandidatesCard;
