import {React, useState} from 'react'
import motor1 from "../assets/images/motor1.jpeg"
import motor2 from "../assets/images/motor2.jpeg"
import motor3 from "../assets/images/motor3.jpeg"
import motor4 from "../assets/images/motor4.jpeg"

import { NavLink } from 'react-router-dom'
const Motors = () => {
const [search, setSearch] = useState("")
const [currentPage, setCurrentPage] = useState(1)

const itemsPerPage = 6


  const motors = [
  {
    id: 1,
    name: "Honda SC.",
    power: "300 HP",
    image: motor1
  },
  {
    id: 2,
    name: "Yamaha",
    power: "450 HP",
    image: motor2
  },
  {
    id: 3,
    name: "Susuky",
    power: "450 HP",
    image: motor3
  },
  {
    id: 4,
    name: "Gato",
    power: "450 HP",
    image: motor4
  },
  {
    id: 5,
    name: "Loncin",
    power: "450 HP",
    image: motor2
  },
  {
    id: 3,
    name: "Susuky",
    power: "450 HP",
    image: motor3
  },
  {
    id: 4,
    name: "Gato",
    power: "450 HP",
    image: motor4
  },
  {
    id: 5,
    name: "Loncin",
    power: "450 HP",
    image: motor2
  }
]
const filteredMotors = motors.filter(motor =>
  motor.name.toLowerCase().includes(search.toLowerCase())
)
const totalPages = Math.ceil(filteredMotors.length / itemsPerPage)

const startIndex = (currentPage - 1) * itemsPerPage
const endIndex = startIndex + itemsPerPage

const currentMotors = filteredMotors.slice(startIndex, endIndex)
const handleSearch = (e) => {
  setSearch(e.target.value)
  setCurrentPage(1)
}

  return (
   
  <section  className="fondo ">
  <div  className="fondo-content container">
    <h2  className="text-center mb-4">Motores Disponibles</h2>
    {/* BUSCADOR */}
<div className="row mb-4">
  <div className="col-md-6 mx-auto">
    <input
  type="text"
  className="form-control form-control-lg"
  placeholder="Buscar motor por marca..."
  value={search}
  onChange={handleSearch}
/>

  </div>
</div>

  <div className="row g-4">
  {currentMotors.map(motor => (
    <div className="col-4 col-md-6 col-ms-6 col-lg-2">

      <NavLink
        to={`/motors/${motor.id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card shadow-sm h-100 ">
          <img src={motor.image} className="card-img-top" />
          <div className="card-body p-0">
            <h6 className="card-title">{motor.name}</h6>
            <p className="card-text">Potencia: {motor.power}</p>
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

export default Motors
