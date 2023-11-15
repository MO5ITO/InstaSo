import { Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "./Views/LoginPage/index.jsx";
import HomePage from "./Views/HomePage/index.jsx";
import ProfilePage from "./Views/ProfilePage/index.jsx";
import PageNotFound from "./Views/Widgets/PageNotFound.jsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";
import './App.css';

function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div>

      
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={isAuth ? <Navigate to="/home" /> : <LoginPage/>} /> 
          <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
          <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />  
          <Route path="*" element={<PageNotFound/>} /> 
        </Routes>
      </ThemeProvider>


    </div>
  );
}

export default App;
