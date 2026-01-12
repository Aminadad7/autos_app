import { Routes, Route } from 'react-router-dom'
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from './pages/Home'
import Cars from './pages/Cars'
import Motors from './pages/Motors'
import Login from './pages/Login'
import CarDetails from './pages/CarDetails'
import MotorDetails from './pages/MotorDetails'

import Dashboard from './dashboard/Dashboard'
import CarsAdmin from './dashboard/CarsAdmin'
import MotorsAdmin from './dashboard/MotorsAdmin'
import UsersAdmin from './dashboard/UsersAdmin'
import HeroAdmin from './dashboard/HeroAdmin'
import ServicesAdmin from './dashboard/ServicesAdmin'
import TestimonialsAdmin from './dashboard/TestimonialsAdmin'
function App() {
  return (
   
    <Routes>

      {/* PUBLIC */}
       <Route element={<PublicLayout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/motors" element={<Motors />} />
      <Route path="/motors/:id" element={<MotorDetails />} />
      <Route path="/login" element={<Login />} />
      </Route>

      {/* DASHBOARD */}
      <Route element={<AdminLayout />}>
      <Route path="/admin" element={<Dashboard />}>
      <Route index element={<CarsAdmin />} />
        <Route path="cars" element={<CarsAdmin />} />
        <Route path="motors" element={<MotorsAdmin />} />
        <Route path="users" element={<UsersAdmin />} />
        <Route path="hero" element={<HeroAdmin />} />
        <Route path="services" element={<ServicesAdmin />} />
        <Route path="testimonials" element={<TestimonialsAdmin />} />
      </Route>
      </Route>

    </Routes>
   
    
    
  )
}

export default App
