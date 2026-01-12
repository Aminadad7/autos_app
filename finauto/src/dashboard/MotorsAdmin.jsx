import React from 'react'

const MotorsAdmin = () => {
  return (
    <div>
      
         <section id="motorsSection" >
           <div  className="d-flex justify-content-between align-items-center mb-3">
        <h3>Motores Disponibles</h3>
        <button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMotorModal">+ Agregar</button></div>
        <table  className="table table-bordered table-hover text-center align-middle">
          <thead  className="table-dark">
            <tr>
              <th className="d-none d-md-table-cell">Imagen</th>
              <th className="d-none d-md-table-cell">Nombre</th>
              <th className="d-none d-md-table-cell">Tipo</th>
              <th className="d-none d-md-table-cell">HP</th>
              <th className="d-none d-md-table-cell">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="img/motor1.jpg" width="80"/></td>
              <td>V8 Turbo</td>
              <td>Gasolina</td>
              <td>450</td>
              <td>
                <button  className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editMotorModal">Editar</button>
                <button  className="btn btn-danger btn-sm">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
        
        <div  className="modal fade" id="addMotorModal"  tabIndex={1}>
  <div  className="modal-dialog">
    <div  className="modal-content">
      <div  className="modal-header">
        <h5  className="modal-title">Agregar Motor</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div  className="modal-body">
        <form  className="d-grid gap-3">
          <input  className="form-control" placeholder="Marca"/>
          <input  className="form-control" placeholder="Tipo"/>
          <input  className="form-control" type="number" placeholder="HP"/>
          <textarea  className="form-control" placeholder="Descripcion"></textarea>
          <input  className="form-control" type="file"/>
        </form>
      </div>

      <div  className="modal-footer">
        <button  className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button  className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
<div  className="modal fade" id="editMotorModal"  tabIndex={1}>
  <div  className="modal-dialog">
    <div  className="modal-content">
      <div  className="modal-header">
        <h5  className="modal-title">Editar Motor</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div  className="modal-body">
        <form  className="d-grid gap-3">
          <input  className="form-control" />
          <input  className="form-control" />
          <input  className="form-control" type="number"/>
          <textarea  className="form-control" placeholder="Descripcion"></textarea>
          <input  className="form-control" type="file"/>
        </form>
      </div>

      <div  className="modal-footer">
        <button  className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button  className="btn btn-warning">Actualizar</button>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default MotorsAdmin
