import { FC } from "react";
import InterviewCard from "./components/interview-card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

interface InterviewsTabProps {
  interviews: Array<unknown>;
}

const InterviewsTab: FC<InterviewsTabProps> = ({ interviews }) => {
  return (
    <Box>
      <Stack spacing={6}>
        {interviews.map((interview) => (
          <InterviewCard {...interview} />
        ))}
      </Stack>
    </Box>
  );
};

export default InterviewsTab;
