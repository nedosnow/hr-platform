import ProfileCard from "@/widgets/profile-card/profile-card";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import InterviewsTab from "@/features/inerviews-tab/interviews-tab";

const Profile = {
  name: "Andrew Gilbert Anderson",
  position: "Frontend",
  email: "andrew-gilbert@example.com",
  location: "Moscow, Russia",
  birthDate: "1995-12-05",
  status: "Активный",
};

const data = [
  {
    title: "SberSales",
    date: "10 января",
    status: "Завершено",
    duration: "2 часа",
    position: "Менеджер",
  },
  {
    title: "SberMobile",
    date: "5 февраля",
    status: "В работе",
    duration: "4 часа",
    position: "Программист",
  },
  {
    title: "Sber Tech",
    date: "3 марта",
    status: "Отменено",
    duration: "1 час",
    position: "Руководитель проекта",
  },
  {
    title: "Okko",
    date: "8 апреля",
    status: "Выполняется",
    duration: "6 часов",
    position: "Дизайнер",
  },
  {
    title: "SberSpasibo",
    date: "2 мая",
    status: "Запланировано",
    duration: "3 часа",
    position: "Аналитик данных",
  },
];

const CandidateProfilePage = () => {
  const [value, setValue] = useState("baseInfo");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box bgcolor="background.white" boxShadow={5} p={4} mb={16}>
        <ProfileCard {...Profile} />
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Основная информация" value="baseInfo" />
              <Tab label="Интервью" value="interview" />
            </TabList>
          </Box>
          <TabPanel value="interview">
            <InterviewsTab interviews={data} />
          </TabPanel>
          <TabPanel value="baseInfo">baseInfo</TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default CandidateProfilePage;
