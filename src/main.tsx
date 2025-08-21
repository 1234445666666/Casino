import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // Основной цвет - используется для основных элементов (кнопки, иконки, акценты)
    primary: {
      main: "#1976d2", // Синий цвет для primary элементов
      light: "#42a5f5", // Светлый вариант primary
      dark: "#1565c0", // Темный вариант primary
    },

    // Вторичный цвет - для дополнительных элементов
    secondary: {
      main: "#9c27b0", // Фиолетовый цвет для secondary элементов
      light: "#ba68c8", // Светлый вариант secondary
      dark: "#7b1fa2", // Темный вариант secondary
    },

    // Цвет успеха - для позитивных действий (успех, подтверждение)
    success: {
      main: "#4caf50", // Зеленый цвет для успешных операций
      light: "#81c784", // Светлый вариант success
      dark: "#388e3c", // Темный вариант success
    },

    // Цвет ошибки - для ошибок и предупреждений
    error: {
      main: "#f44336", // Красный цвет для ошибок
      light: "#e57373", // Светлый вариант error
      dark: "#d32f2f", // Темный вариант error
    },

    // Цвета фона
    background: {
      default: "#121212", // Темный фон для body (основной фон страницы)
      paper: "#1e1e1e", // Темный фон для карточек, панелей, меню
    },

    // Цвета текста
    text: {
      primary: "#ffffff", // Белый цвет для основного текста
      secondary: "#aaaaaa", // Серый цвет для второстепенного текста
      disabled: "#666666", // Цвет для disabled элементов
    },

    // Действия (action) - цвета для интерактивных элементов
    action: {
      active: "#ffffff", // Белый цвет для активных иконок
      hover: "rgba(255, 255, 255, 0.08)", // Цвет при наведении
      selected: "rgba(255, 255, 255, 0.16)", // Цвет выбранного элемента
      disabled: "rgba(255, 255, 255, 0.3)", // Цвет disabled элементов
      disabledBackground: "rgba(255, 255, 255, 0.12)", // Фон disabled
    },

    // Делители (разделители)
    divider: "rgba(255, 255, 255, 0.12)", // Полупрозрачный белый для разделителей
  },

  // Типография - настройки шрифтов
  typography: {
    fontFamily: "Inter, Arial, sans-serif", // Основной шрифт
    h1: { color: "#ffffff" }, // Заголовки белые
    h2: { color: "#ffffff" },
    h3: { color: "#ffffff" },
    h4: { color: "#ffffff" },
    h5: { color: "#ffffff" },
    h6: { color: "#ffffff" },
    body1: { color: "#ffffff" }, // Основной текст белый
    body2: { color: "#aaaaaa" }, // Второстепенный текст серый
  },

  // Компоненты - кастомизация конкретных компонентов
  components: {
    // Настройка иконок
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#ffffff", // Белый цвет для всех иконок
        },
      },
    },

    // Настройка кнопок
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Убираем автоматическое преобразование в uppercase
        },
      },
    },

    // Настройка карточек
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e", // Темный фон карточек
          color: "#ffffff", // Белый текст в карточках
        },
      },
    },

    // Настройка AppBar
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e", // Темный фон AppBar
          color: "#ffffff", // Белый текст в AppBar
        },
      },
    },

    // Настройка Drawer (бокового меню)
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1e1e1e", // Темный фон Drawer
          color: "#ffffff", // Белый текст в Drawer
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
