import TextField from "@mui/material/TextField";
import { FC } from "react";
import { FormWrapper } from "./add-candidate-form.style";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
    <FormWrapper>
      <Typography variant="h4">Добавить соискателя</Typography>

      <Avatar
        // src="/static/images/avatar/1.jpg"
        sx={{ width: 72, height: 72 }}
      />
      <Button variant="contained" startIcon={<CloudUploadIcon />}>
        Загрузить фото
        <input type="file" accept="image/png, image/jpeg" hidden />
      </Button>

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
    </FormWrapper>
  );
};

export default AddCandidateForm;
