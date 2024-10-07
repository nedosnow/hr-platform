import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC, memo } from "react";

interface InterviewCardProps {
  date: string;
  status: string;
  duration: string;
  position: string;
  title: string;
}

const InterviewCard: FC<InterviewCardProps> = ({
  date,
  duration,
  position,
  status,
  title,
}) => (
  <Card sx={{ borderRadius: 2 }}>
    <CardContent>
      <Box display="flex" alignItems="center" gap={6} mb={2}>
        <Typography variant="h4">Интервью в {title}</Typography>
        <Chip label={status} />
      </Box>
      <Stack direction="row" spacing={6}>
        <Box>
          <Typography color="text.secondary">Позиция</Typography>
          <Typography>{position}</Typography>
        </Box>
        <Box>
          <Typography color="text.secondary">Дата проведения</Typography>
          <Typography>{date}</Typography>
        </Box>
        <Box>
          <Typography color="text.secondary">Продолжительность</Typography>
          <Typography>{duration}</Typography>
        </Box>
      </Stack>
    </CardContent>
    <CardActions>
      <Button>Начать</Button>
      <Button>Обратная связь</Button>
    </CardActions>
  </Card>
);

export default memo(InterviewCard);
