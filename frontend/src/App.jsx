import {Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Oppurtunity from "./pages/oppurtunity/Oppurtunity";
import Update from "./pages/updates/Update";
import Blog from "./pages/blogs/Blog";
import {Toaster} from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="" /> : <SignUp />} />
        <Route path='/about' element={<About />}/>
        <Route path='/oppurtunity' element={<Oppurtunity />}/>
        <Route path='/update' element={<Update />}/>
        <Route path='/blogs' element={<Blog />}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App
