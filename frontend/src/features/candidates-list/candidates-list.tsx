import Box from "@mui/material/Box/Box";

import CandidatesCard from "./components/candidates-card";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import { SearchContainer } from "./candidates-list.style";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Input } from "@mui/material";

const avatar = "/src/assets/img_avatar.png";
const avater2 = "/src/assets/img_avatar2.png";
const candidates = [
  {
    name: "Иван",
    surname: "Иванович",
    middleName: "Иванов",
    avatar: avatar,
    status: "На рассмотрении",
    dateOfBirth: "1.11.1991",
    email: "user1@sber.ru",
    phoneNumber: "+7-111-111-11-11",
    role: "Developer",
  },
  {
    name: "Петр",
    surname: "Петров",
    middleName: "Петрович",
    avatar: avater2,
    status: "Принят",
    dateOfBirth: "2.22.1991",
    email: "user2@sber.ru",
    phoneNumber: "+7-222-222-22-22",
    role: "Developer",
  },
  {
    name: "Иван",
    surname: "Петрович",
    middleName: "Иванов",
    avatar: avatar,
    status: "Зарегистрирован",
    dateOfBirth: "3.33.1991",
    email: "user3@sber.ru",
    phoneNumber: "+7-131-31-31-33",
    role: "Tester",
  },
  {
    name: "Петр",
    surname: "Иванович",
    middleName: "Петров",
    avatar: avatar,
    status: "На рассмотрении",
    dateOfBirth: "1.11.444",
    email: "user4@sber.ru",
    phoneNumber: "+7-111-44-11-11",
    role: "Analythic",
  },
  {
    name: "Олег",
    surname: "Иванович",
    middleName: "Петров",
    avatar: avater2,
    status: "На рассмотрении",
    dateOfBirth: "5.11.1991",
    email: "user5@sber.ru",
    phoneNumber: "+7-555-111-55-11",
    role: "Dysigner",
  },
];

const CandidatesList = () => {
  return (
    <>
      <SearchContainer>
        <Input
          inputProps={{ label: "Поиск" }}
          fullWidth
          id="outlined-basic"
          endAdornment={<SearchIcon />}
        />
      </SearchContainer>

      <Box sx={{ width: "100%", margin: "16px 0" }}>
        <Grid container spacing={3}>
          {candidates.map((user) => (
            <Grid item xs={4}>
              <CandidatesCard user={user} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CandidatesList;
