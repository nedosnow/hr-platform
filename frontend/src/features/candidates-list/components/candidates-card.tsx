import { CardMedia, Box, CardContent, Typography, Chip } from "@mui/material";
import {
  CardContainer,
  CardContentContainer,
  CardImage,
  StatusContainer,
  StyledHeaderBox,
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
      <CardContentContainer>
        <CardImage
          component="img"
          image={avatar}
          alt="Live from space album cover"
        />

        <StyledHeaderBox>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
            }}
          >
            <Typography component="div" variant="subtitle1">
              {`${surname} ${name} ${middleName}`}
            </Typography>
          </Box>
          <StatusContainer>
            <Typography
              component="div"
              variant="subtitle1"
              sx={{ color: "text.secondary" }}
            >
              {role}
            </Typography>
            <Chip
              size="small"
              variant="outlined"
              color="primary"
              label={status}
            />
          </StatusContainer>
        </StyledHeaderBox>
        <CardContent
          sx={{
            paddingLeft: "0",
            paddingBottom: "0!important",
            flex: "1 0 auto",
            padding: "0",
            marginLeft: "100px",
          }}
        >
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
        </CardContent>
      </CardContentContainer>
    </CardContainer>
  );
};

export default CandidatesCard;
