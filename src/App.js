import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AppointmentPage from "./Pages/Appointment/AppointmentPage/AppointmentPage";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReviews from "./Pages/Dashboard/MyReviews";
import MyIntroduction from "./Pages/Dashboard/MyIntroduction";
import Allusers from "./Pages/Dashboard/Allusers";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={<RequireAuth><AppointmentPage></AppointmentPage></RequireAuth>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/dashboard"
          element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReviews></MyReviews>}></Route>
          <Route path="introduction" element={<MyIntroduction></MyIntroduction>}></Route>
          <Route path="users" element={<RequireAdmin><Allusers></Allusers></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
