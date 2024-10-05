import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ThemeProvider } from '@mui/material/styles';

import {themePalette} from "./palette/theme-palette";
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={themePalette}>

<App/>
      </ThemeProvider>
      
  </StrictMode>

)


