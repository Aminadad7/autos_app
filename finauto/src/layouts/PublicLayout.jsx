import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-fill container py-4 px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
