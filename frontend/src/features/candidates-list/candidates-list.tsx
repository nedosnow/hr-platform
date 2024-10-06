import Box from "@mui/material/Box/Box";

import CandidatesCard from "./components/candidates-card";
import Grid from "@mui/material/Grid/Grid";

const avatar = "/src/assets/img_avatar.png";
const avater2 = "/src/assets/img_avatar2.png";
const candidates = [
  {
    name: "Имя - 1",
    surname: "Фамилия - 1",
    middleName: "Отчество - 1",
    avatar: avatar,
    status: "На рассмотрении",
    dateOfBirth: "1.11.1991",
    email: "user1@sber.ru",
    phoneNumber: "+7-111-111-11-11",
    role: "Developer",
  },
  {
    name: "Имя - 2",
    surname: "Фамилия - 2",
    middleName: "Отчество - 2",
    avatar: avater2,
    status: "Принят",
    dateOfBirth: "2.22.1991",
    email: "user2@sber.ru",
    phoneNumber: "+7-222-222-22-22",
    role: "Developer",
  },
  {
    name: "Имя - 3",
    surname: "Фамилия - 3",
    middleName: "Отчество - 3",
    avatar: avatar,
    status: "Зарегистрирован",
    dateOfBirth: "3.33.1991",
    email: "user3@sber.ru",
    phoneNumber: "+7-131-31-31-33",
    role: "Tester",
  },
  {
    name: "Имя - 4",
    surname: "Фамилия - 4",
    middleName: "Отчество - 4",
    avatar: avatar,
    status: "На рассмотрении",
    dateOfBirth: "1.11.444",
    email: "user4@sber.ru",
    phoneNumber: "+7-111-44-11-11",
    role: "Analythic",
  },
  {
    name: "Имя - 5",
    surname: "Фамилия - 5",
    middleName: "Отчество - 5",
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
    <Box sx={{ width: "100%", margin: "24px 0" }}>
      <Grid container spacing={3}>
        {candidates.map((user) => (
          <Grid item xs={6}>
            <CandidatesCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CandidatesList;
