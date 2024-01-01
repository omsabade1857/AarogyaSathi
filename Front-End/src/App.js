import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { NavigationBar } from "./components/NavigationBar";
import { CalmConnect } from "./components/CalmConnect";
import { Footer } from './components/Footer';
import { Signup } from './components/Signup';
import { Profile } from './components/Profile';
import { DoctorProfile } from './components/DoctorProfile';
import {About} from './components/About';
import { Signin } from './components/Signin';
import { DoctorSign } from './components/DoctorSign';
import { AdminSign } from './components/AdminSign';
import {Bookings} from './components/Bookings';
import { PrivateRoute } from './components/PrivateRoute';
import {ContactUs} from './components/ContactUs';
import PrescriptionForm from './components/PrescriptionForm';
import { AarogyaSathiHome } from './components/AarogyaSathiHome';
import { AarogyaSathiHomePage } from './components/AarogyaSathiHomePage';
import  Topbar  from './components/Topbar';
import AdminDashBoard from './components/AdminDashBoard';
import { Doctor } from './components/Doctor';
import { DoctorList } from './components/DoctorList';
import { PatientList } from './components/PatientList';
import { Container } from 'react-bootstrap';

const ParentComponent = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
  
  };
  return (
    <Container>
          <PrescriptionForm onSubmit={handleFormSubmit} />
    </Container>
  );
};

function App(){
  return (<>
    
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
          <Route path="/" element={<AarogyaSathiHome/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/dctrsignin" element={<DoctorSign/>}></Route>
          <Route path="/adminsignin" element={<AdminSign/>}></Route>
          <Route path="/admindashboard" element={<AdminDashBoard/>}></Route>
          <Route path="/presform" element={<ParentComponent/>}></Route>
          <Route path="/myprofile" element={<Profile/>}></Route>
          <Route path="/doctorprofile" element={<DoctorProfile/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          <Route path="/book-appointment" element={<Bookings/>}></Route>
          <Route path="/admin/addDoctor" element={<Doctor/>}></Route>
          <Route path= "/admin/doctorlist" element={<DoctorList/>}></Route>
          <Route path= "/admin/patientlist" element={<PatientList/>}></Route>
          
         
      </Routes>
      <Footer></Footer>
    </BrowserRouter>   
    </>
  );
}

export default App;
