import carro1 from "../assets/images/carro 2.jpeg"
import carro2 from "../assets/images/carro.jpeg"
const CarDetails = () => {
  return (
    <div>
        <section  className="py-5 px-5"style={{ backgroundColor: "#fff4e2"
        
       
       }}>
  <div  className="container">

    <div  className=" row g-4">

     
      <div  className="col-md-6">
        <div id="carGallery"  className="carousel slide" data-bs-ride="carousel">
          <div  className="carousel-inner rounded shadow">
            <div  className="carousel-item active">
              <img src={carro1} className="d-block w-100"/>
            </div>
            <div  className="carousel-item">
              <img src={carro1}  className="d-block w-100"/>
            </div>
            <div  className="carousel-item">
              <img src={carro1}  className="d-block w-100"/>
            </div>
          </div>

          <button  className="carousel-control-prev" data-bs-target="#carGallery" data-bs-slide="prev">
            <span  className="carousel-control-prev-icon"></span>
          </button>
          <button  className="carousel-control-next" data-bs-target="#carGallery" data-bs-slide="next">
            <span  className="carousel-control-next-icon"></span>
          </button>
        </div>
        
      </div>

 
      <div  className="col-md-6" >
        <h2>Toyota Corolla</h2>
        <p  className="text-muted">Sedán · Gasolina</p>

        <h4  className="text-danger">$18,000</h4>

        <ul  className="list-group my-3" >
          <li  className="list-group-item">Año: 2022</li>
          <li  className="list-group-item">Motor: 1.8L</li>
          <li  className="list-group-item">Transmisión: Automática</li>
          <li  className="list-group-item">Kilometraje: 30,000 km</li>
        </ul>

        <button  className="btn btn-success w-100">Contactar Vendedor</button>
      </div>

    </div>

  </div>
</section>
      
    </div>
  )
}

export default CarDetails
