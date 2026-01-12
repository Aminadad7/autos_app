import {React, useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import NavAdmin from './NavAdmin.jsx'
import '../assets/css/dashboard.css'
import Footer from '../components/Footer.jsx'
import Estadisticas from './Estadistica.jsx' 

const Dashboard = () => {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-flex min-vh-100"  style={{ backgroundColor: "#f8f8f8",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
       }}>
      
       
      <main className="col-md-10 p-4"
      >
       <Estadisticas />
        <Outlet />
       
      </main>
      
    </div>
  );
}

export default Dashboard
