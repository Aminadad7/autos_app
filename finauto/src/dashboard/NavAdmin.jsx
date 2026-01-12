import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/log.png'
const NavAdmin = ({ onToggle }) => {
  return (
    <nav className="navbar navbar-dark px-5 sticky-top" style={{ backgroundColor: "#f8f8f8"
        
       
       }}>
      
      {/* Botón hamburguesa (solo móvil) */}
      <button
        className="btn btn-outline-light d-md-none me-2"
        onClick={onToggle}
        aria-label="Toggle sidebar"
      style={{ backgroundColor: "#d9241e"
        
       
       }}>
        ☰
      </button>

      {/* Logo / título */}
      <Link to="/admin" className="navbar-brand  mb-0 h1">
        <img src={logo} className="img-fluid rounded-circle img-responsive" alt=""
          style={{
             height: "60px",      /* ajusta según tu navbar */
            width: "auto",
            maxHeight: "90px",
             objectFit: "contain"
          }}
          />
      </Link>

      {/* Acciones derecha */}
      <div className="ms-auto d-flex align-items-center gap-2">
        <Link to="/admin" className="btn btn-outline-danger btn-sm">
          Dashboard
        </Link>

        <Link to="/" className="btn btn-outline-danger btn-sm">
          Ver sitio
        </Link>

        <Link to="/login" className="btn btn-danger btn-sm">
          Salir
        </Link>
      </div>
    </nav>
  );
};

export default NavAdmin;
