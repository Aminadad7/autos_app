import React from "react"
import carro1 from "../assets/images/motor1.jpeg"
import carro2 from "../assets/images/motor2.jpeg"

const MotorDetails = () => {
  return (
    <section className="py-5 px-5" style={{ backgroundColor: "#fff4e2"
        
       
       }}>
      <div className="container">
        <div className=" row g-4">

          <div className="col-md-6 " >
            <div id="motorGallery" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner rounded shadow">

                <div className="carousel-item active">
                  <img src={carro1} className="d-block w-100" alt="Motor 1" />
                </div>

                <div className="carousel-item">
                  <img src={carro2} className="d-block w-100" alt="Motor 2" />
                </div>

              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#motorGallery" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#motorGallery" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <h2>Motor Yamaha 2021</h2>
            <p className="text-muted">Gasolina</p>
            <h4 className="text-danger">$18,000</h4>
            <ul  className="list-group my-3" >
          <li  className="list-group-item">Año: 2022</li>
          <li  className="list-group-item">Motor: 1.8L</li>
          <li  className="list-group-item">Transmisión: Automática</li>
          
        </ul>
            <button className="btn btn-success w-100">Contactar Vendedor</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MotorDetails
