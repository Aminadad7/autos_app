import React from 'react'
import Navbar from '../components/Navbar'
import car1 from "../assets/images/carro.jpeg"
import car2 from "../assets/images/carro 2.jpeg"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Cars = () => {
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

const itemsPerPage = 6


  const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    year: 2022,
    price: "$18,000",
    image: car1
  },
  {
    id: 2,
    name: "Honda Civic",
    year: 2021,
    price: "$17,000",
    image: car2
  },
  {
    id: 3,
    name: "Kia Sportage",
    year: 2021,
    price: "$17,000",
    image: car1
  },
  {
    id: 4,
    name: "Hyundai Tucson",
    year: 2021,
    price: "$17,000",
    image: car1
  },
  {
    id: 5,
    name: "Mazda CX-5",
    year: 2021,
    price: "$17,000",
    image: car1
  },
   {
    id: 1,
    name: "Toyota Corolla",
    year: 2022,
    price: "$18,000",
    image: car1
  },
  {
    id: 2,
    name: "Honda Civic",
    year: 2021,
    price: "$17,000",
    image: car2
  },
  {
    id: 3,
    name: "Kia Sportage",
    year: 2021,
    price: "$17,000",
    image: car1
  },
  {
    id: 4,
    name: "Hyundai Tucson",
    year: 2021,
    price: "$17,000",
    image: car1
  }
]
const filteredCars = cars.filter(car =>
  car.name.toLowerCase().includes(search.toLowerCase())
)
const totalPages = Math.ceil(filteredCars.length / itemsPerPage)

const startIndex = (currentPage - 1) * itemsPerPage
const endIndex = startIndex + itemsPerPage

const currentCars = filteredCars.slice(startIndex, endIndex)
const handleSearch = (e) => {
  setSearch(e.target.value)
  setCurrentPage(1)
}
  return (
  
     
 <section  className=" fondo" >
  <div  className="fondo-content container " >
    <h2  className="text-center  mb-9">Autos Disponibles</h2>
    {/* BUSCADOR */}
<div className="row mb-4">
  <div className="col-md-6 mx-auto">
    <input
  type="text"
  className="form-control form-control-lg"
  placeholder="Buscar auto por marca..."
  value={search}
  onChange={handleSearch}
/>

  </div>
</div>

  
      
    
  <div className="row g-4 pt-0">
  {currentCars.map(car => (
    <div className="col-4 col-md-6 col-ms-6 col-lg-2">

      <NavLink to={`/cars/${car.id}`} className="text-decoration-none text-dark">
        <div className="card shadow-sm h-100">
          <img src={car.image} className="card-img-top" />
          <div className="card-body p-0">
            <h6 className="card-title">{car.name}</h6>
            <p className="card-text">Año: {car.year}</p>
            {/* <p className="fw-bold">{car.price}</p> */}
          </div>
        </div>
      </NavLink>
    </div>
  ))}
</div> 
{/* PAGINATION */}
<nav className="mt-5">
  <ul className="pagination justify-content-center">

    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
      <button
        className="page-link"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Anterior
      </button>
    </li>

    {[...Array(totalPages)].map((_, index) => (
      <li
        key={index}
        className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      </li>
    ))}

    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
      <button
        className="page-link"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Siguiente
      </button>
    </li>

  </ul>
</nav>

    </div>
  
</section>
    
  )
}

export default Cars
