import * as React from 'react';
import Stack from '@mui/material/Stack';

import './App.css';
import Button from './shared/components/button/button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import MediaControlCard from './shared/components/card';
import ResponsiveAppBar from './shared/components/app-bar';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <ResponsiveAppBar/>
    <Container className={'bodyContainer'}>
      <div>
      <Box sx={{ width: '800px', height:'300px' }}>
        <MediaControlCard/>
      </Box>
      <Box sx={{ width: '800px', height:'500px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs

                aria-label="secondary tabs example"
                value={value} onChange={handleChange}
             >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography  gutterBottom>
            Пример текста
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Stack spacing={2} direction="row">
            <Box  component="form"
                   sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                   noValidate
                   autoComplete="off">
              <Button color={'secondary'} variant="contained" >уХеллоу</Button>
              <Button variant="contained" >уХеллоу</Button>
              <Button variant="contained" >уХеллоу</Button>
              <Button variant="contained" >уХеллоу</Button>
              <Button variant="contained" >уХеллоу</Button>
              <Button variant="contained" >уХеллоу</Button>
            </Box>
          </Stack>
        </CustomTabPanel>
      </Box>
      </div>
    </Container>
    </>
  );
}

export default App;
