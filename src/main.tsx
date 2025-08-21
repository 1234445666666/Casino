import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/global.scss'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // твой основной цвет
    },
    secondary: {
      main: "#9c27b0",
    },
    success: {
      main: "#4caf50",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#121212", // фон для body
      paper: "#1e1e1e", // фон для карточек
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});



createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
     </ThemeProvider>
  </StrictMode>,
)
