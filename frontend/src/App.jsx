import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import OTPPage from './pages/signup/OTPPage';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Oppurtunity from "./pages/oppurtunity/Oppurtunity";
import Update from "./pages/updates/Update";
import Blog from "./pages/blogs/Blog";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className='p-4 flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path='/signup' element={!authUser ? <SignUp /> : <Navigate to="/otp" />} />
        <Route path='/otp' element={!authUser ? <OTPPage /> : <Navigate to="/" />} />
        <Route path='/about' element={authUser ? <About /> : <Navigate to="/login" />} />
        <Route path='/oppurtunity' element={authUser ? <Oppurtunity /> : <Navigate to="/login" />} />
        <Route path='/update' element={authUser ? <Update /> : <Navigate to="/login" />} />
        <Route path='/blogs' element={authUser ? <Blog /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
