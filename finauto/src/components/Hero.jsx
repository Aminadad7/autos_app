
import { NavLink } from "react-router-dom"

import img1 from "../assets/images/hero1.jpg"
import img2 from "../assets/images/hero2.jpg"
import img3 from "../assets/images/hero3.jpg"
const Hero = () => {
  return (
    <div>
     
      <div id="heroCarousel"  className="carousel slide " data-bs-ride="carousel"> 
        <div  className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0"  className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>

      
        <div  className="carousel-inner">

        
          <div  className="carousel-item active">
            <section style={{
    backgroundImage: `url(${img1})`,
    backgroundSize: "95%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "45vh",
    backgroundColor: "#e09604" // opcional para bordes
  }}
            
              className="rounded d-flex align-items-center text-center text-white carousel">
              <div  className="container bg-dark bg-opacity-50 p-5 rounded">
                <h1  className="display-5 fw-bold">Encuentra tu próximo vehículo</h1>
                <p  className="lead">Autos y motores de calidad garantizada</p>
               
                <NavLink className="btn btn-primary btn-lg mt-3" to="/cars">
               Ver Autos
              </NavLink>
              </div>
            </section>
          </div>

        
          <div  className="carousel-item">
            <section
              className="rounded d-flex align-items-center text-center text-white carousel"
              
              style={{
    backgroundImage: `url(${img2})`,
    backgroundSize: "95%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "45vh",
    backgroundColor: "#e09604" // opcional para bordes
  }}
            >
              
              <div  className="container bg-dark bg-opacity-50 p-5 rounded">
                
                <h1  className="display-5 fw-bold">Motores de Alto Rendimiento</h1>
                <p  className="lead">Potencia, calidad y durabilidad</p>
                
                 <NavLink className="btn btn-warning btn-lg mt-3" to="/motors">
               Ver Motores
              </NavLink>
              </div>
            </section>
          </div>


          <div  className="carousel-item">
            <section
             style={{
    backgroundImage: `url(${img2})`,
    backgroundSize: "95%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "45vh",
    backgroundColor: "#e09604" // opcional para bordes
  }}
              className=" rounded d-flex align-items-center text-center text-white">
              
              <div  className="container bg-dark bg-opacity-50 p-5 rounded">
                <h1  className="display-5 fw-bold">Ofertas Especiales</h1>
                <p  className="lead">Los mejores precios del mercado</p>
                <NavLink className="btn btn-success btn-lg mt-3" to="/cars">
               Ver Motores
              </NavLink>
              </div>
            </section>
          </div>

        </div>

        <button  className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span  className="carousel-control-prev-icon"></span>
        </button>

        <button  className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span  className="carousel-control-next-icon"></span>
        </button>

      </div>
    </div>
  )
}

export default Hero


