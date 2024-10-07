import TextField from "@mui/material/TextField";
import { FC } from "react";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AvatarField from "./components/avatar-field";
import Box from "@mui/material/Box";

const positions = [
  {
    value: "frontend",
    label: "Фронтенд",
  },
  {
    value: "backend",
    label: "Бэкенд",
  },
  {
    value: "analysys",
    label: "Аналитик",
  },
];

const AddCandidateForm: FC = () => {
  return (
    <Box
      p={6}
      width="420px"
      display="flex"
      flexDirection="column"
      gap={4}
      mx="auto"
      mb={16}
      boxShadow={4}
    >
      <Typography variant="h4">Добавить соискателя</Typography>
      <AvatarField />
      <TextField label="Имя" name="name" required fullWidth />
      <TextField label="Отчество" name="middlename" fullWidth />
      <TextField label="Фамилия" name="surname" required fullWidth />
      <TextField
        label="Дата рождения"
        name="birthDate"
        type="date"
        fullWidth
        InputLabelProps={{ shrink: true }}
      />
      <TextField label="E-mail" type="email" name="email" fullWidth />
      <TextField select label="Позиция">
        {positions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained">Добавить</Button>
    </Box>
  );
};

export default AddCandidateForm;
