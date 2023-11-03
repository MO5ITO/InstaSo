import { Navigate, Routes, Route } from "react-router-dom";
import NavBar from './Views/NavBar/index.jsx';
import LoginPage from "./Views/LoginPage/index.jsx";
import HomePage from "./Views/HomePage/index.jsx";
import ProfilePage from "./Views/ProfilePage/index.jsx";
import PageNotFound from "./Views/Widgets/PageNotFound.jsx";

function App() {
  return (
    <div>

      <NavBar/>
      <Routes>
        <Route path="/" element={<LoginPage/>} /> 
        <Route path="/home" element={<HomePage/>} />
        <Route path="/profile/:userId" element={<ProfilePage/>} />  
        <Route path="*" element={<PageNotFound/>} /> 
      </Routes>


    </div>
  );
}

export default App;
