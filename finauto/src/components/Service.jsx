

const Service = () => {
  return (
    <div>
        <section  className="py-5 m-3 text-light rounded" style={{ backgroundColor: "#d82920",
       
       }}>
  <div  className="container text-amber-50">
    <div  className="text-center mb-5">
      <h2  className="fw-bold ">Nuestros Servicios</h2>
      <p  className="text-muted">Todo lo que necesitas en un solo lugar</p>
    </div>

    <div  className="row g-4">
      <div  className="col-md-4">
        <div  className="card h-100 text-center shadow-sm">
          <div  className="card-body">
            <div  className="display-4 mb-3">🚗</div>
            <h5  className="card-title">Venta de Autos</h5>
            <p  className="card-text">
              Vehículos nuevos y usados,recien importados y con la mejor garantía.
            </p>
          </div>
        </div>
      </div>

      <div  className="col-md-4">
        <div  className="card h-100 text-center shadow-sm">
          <div  className="card-body">
            <div  className="display-4 mb-3"><i class="fa-solid fa-motorcycle"></i></div>
            <h5  className="card-title">Motores</h5>
            <p  className="card-text">
              Motores gasolina y electricos de alto rendimiento.
            </p>
          </div>
        </div>
      </div>

      <div  className="col-md-4">
        <div  className="card h-100 text-center shadow-sm">
          <div  className="card-body">
            <div  className="display-4 mb-3"><i class="fa-solid fa-hand-holding-dollar"></i></div>
            <h5  className="card-title">Financiamiento</h5>
            <p  className="card-text">
              Te facilitamos la vida con nuestros cómodos financiamientos..
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
    </div>
  )
}

export default Service
