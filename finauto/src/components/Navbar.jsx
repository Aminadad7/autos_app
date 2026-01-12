import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/log.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" 
      style={{ backgroundColor: "#f8f8f8"
        
       
       }}
    >
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand navbar-logo" to="/">
  <img
    src={logo}
    alt="FINAUTO"
    className="img-fluid"
  />
</Link>


        {/* Toggle mobile */}
       <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
   style={{ backgroundColor: "#d9241e"
        
       
       }}
>
  <span className="navbar-toggler-icon" ></span>
</button>


        {/* Menu */}
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav fw-bold ms-lg-auto text-center">


          

            <li className="nav-item ">
              <NavLink className="nav-link " to="/"
               style={{ color: "#d9241e"}}>
                Inicio
              </NavLink>
            </li>
{/* <li className="nav-item ">
              <NavLink className="nav-link text-white" to="/admin">
                Admin
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link " to="/cars"
              style={{ color: "#d9241e"}}>
                Autos
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link " to="/motors"style={{ color: "#d9241e"}}>
                Motores
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to="/login"style={{ color: "#d9241e"}}>
                Login
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

