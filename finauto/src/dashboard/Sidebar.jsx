import { NavLink } from "react-router-dom";

const Sidebar = ({ show, onClose }) => {
  return (
    <aside
      className={`sidebar fw-bold  text-white p-3 ${
        show ? "show" : ""
      }`}
     style={{ backgroundColor: "#f8f8f8",
       
       }}>
      <h5 className="mb-4"  style={{ color: "#d9241e"}}>Admin FINAUTO</h5>

      <nav className="nav flex-column gap-2">
        <NavLink to="/admin" end className="nav-link " onClick={onClose} style={{ color: "#d9241e"}}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/admin/cars" className="nav-link " onClick={onClose} style={{ color: "#d9241e"}}>
          🚗 Autos
        </NavLink>

        <NavLink to="/admin/motors" className="nav-link " onClick={onClose} style={{ color: "#d9241e"}}>
          🏍 Motores
        </NavLink>

        <NavLink to="/admin/users" className="nav-link " onClick={onClose} style={{ color: "#d9241e"}}>
          👤 Usuarios
        </NavLink>

        <NavLink to="/admin/hero" className="nav-link " onClick={onClose} style={{ color: "#d9241e"}}>
          🖼 Hero
        </NavLink>

        <NavLink to="/admin/services" className="nav-link " onClick={onClose} style={{ color: "#d9241e"}}>
          🛠 Servicios
        </NavLink>

        <NavLink to="/admin/testimonials" className="nav-link " onClick={onClose} style={{ color: "#d9241e"}}>
          💬 Testimonios
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
