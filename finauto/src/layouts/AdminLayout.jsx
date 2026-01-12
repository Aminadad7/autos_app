import { Outlet } from "react-router-dom";
import NavAdmin from "../dashboard/NavAdmin";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../components/Footer";
import { useState } from "react";
import "../assets/css/dashboard.css";

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <NavAdmin onToggle={() => setShowSidebar(!showSidebar)} />

      <div className="d-flex">
        <Sidebar
          show={showSidebar}
          onClose={() => setShowSidebar(false)}
        />

        <main className="flex-fill p-4">
          
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default AdminLayout;
