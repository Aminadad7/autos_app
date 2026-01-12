import React from 'react'

const CarsAdmin = () => {
  return (
    <div>
         <section id="carsSection">
        
         <div  className="d-flex justify-content-between align-items-center mb-3">
        <h3>Autos Disponibles</h3>
        <button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCarModal">+ Agregar</button></div>
        <div className="table-responsive">
        <table  className="table table-striped table-bordered align-middle">
          <thead  className="table-dark">
            <tr>
              <th className="d-none d-md-table-cell">Imagen</th>
              <th className="d-none d-md-table-cell">Modelo</th>
              <th className="d-none d-md-table-cell">Año</th>
              <th className="d-none d-md-table-cell">Precio</th>
              <th className="d-none d-md-table-cell">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="img/car1.jpg" width="80"/></td>
              <td>Toyota Corolla</td>
              <td>2022</td>
              <td>$18,000</td>
              <td>
                <button  className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editCarModal">Editar</button>
                <button  className="btn btn-danger btn-sm">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>
      
      {/* Modals for adding and editing cars would go here */}
      <div  className="modal fade" id="editCarModal" tabindex="-1">
  <div  className="modal-dialog modal-lg">
    <div  className="modal-content p-3">
      <div  className="modal-header">
        <h5  className="modal-title">Editar Auto</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div  className="modal-body">
        <form>
          <div  className="row g-3">
            <div  className="col-md-6">
              <input  className="form-control" value="Toyota Corolla"/>
            </div>
            <div  className="col-md-3">
              <input  className="form-control" type="number" value="2022"/>
            </div>
            <div  className="col-md-3">
              <input  className="form-control" type="number" value="18000"/>
              
            </div>
            <textarea  className="form-control" placeholder="Descripcion"></textarea>
            <div  className="col-12">
              <input  className="form-control" type="file"/>
            </div>
          </div>
        </form>
      </div>

      <div  className="modal-footer">
        <button  className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button  className="btn btn-warning">Actualizar</button>
      </div>
    </div>
  </div>
</div>
{/* <!-- ADD CAR MODAL --> */}
<div className="modal fade" id="addCarModal" tabindex="-1" >
  <div className="modal-dialog modal-lg" >
    <div className="modal-content p-3" >
      <div className="modal-header">
        <h5 className="modal-title">Agregar Auto</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div className="modal-body">
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <input className="form-control" placeholder="Modelo"/>
            </div>
            <div className="col-md-3">
              <input className="form-control" type="number" placeholder="Año"/>
            </div>
            <div className="col-md-3">
              <input className="form-control" type="number" placeholder="Precio"/>

            </div>
            <textarea className="form-control" placeholder="Descripcion"></textarea>
            <div className="col-12">
              <input className="form-control" type="file"/>
            </div>
          </div>
        </form>
      </div>

      <div className="modal-footer">
        <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default CarsAdmin
