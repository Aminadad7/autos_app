
const ServicesAdmin = () => {
  return (
    <div>
        <section id="services"  className="content-section ">
  <div  className="d-flex justify-content-between align-items-center mb-3">
    <h2>Servicios</h2>
    <button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addServiceModal">
      + Agregar
    </button>
  </div>
<div className="table-responsive">
  <table  className="table table-bordered table-hover text-center align-middle">
    <thead  className="table-dark">
      <tr>
        <th className="d-none d-md-table-cell">ID</th>
        <th className="d-none d-md-table-cell">Icono</th>
        <th className="d-none d-md-table-cell">Título</th>
        <th className="d-none d-md-table-cell">Descripción</th>
        <th className="d-none d-md-table-cell">Estado</th>
        <th className="d-none d-md-table-cell">Acciones</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>🚗</td>
        <td>Venta de Autos</td>
        <td>Autos nuevos y usados</td>
        <td><span  className="badge bg-success">Activo</span></td>
        <td>
          <button  className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editServiceModal">
            Editar
          </button>
          <button  className="btn btn-secondary btn-sm">Desactivar</button>
          <button  className="btn btn-danger btn-sm">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</section>
{/* Modals for adding and editing services would go here */}
{/* <!-- MODAL SERVICIOS  --> */}
<div  className="modal fade" id="addServiceModal" tabindex="-1">
  <div  className="modal-dialog">
    <div  className="modal-content">
      <div  className="modal-header">
        <h5  className="modal-title">Agregar Servicio</h5>
        <button  className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div  className="modal-body">
        <div  className="mb-3">
          <label  className="form-label">Icono (emoji o clase)</label>
          <input type="text"  className="form-control" placeholder="🚗"/>
        </div>

        <div  className="mb-3">
          <label  className="form-label">Título</label>
          <input type="text"  className="form-control"/>
        </div>

        <div  className="mb-3">
          <label  className="form-label">Descripción</label>
          <textarea  className="form-control"></textarea>
        </div>

        <div  className="form-check">
          <input  className="form-check-input" type="checkbox" checked/>
          <label  className="form-check-label">Activo</label>
        </div>
      </div>

      <div  className="modal-footer">
        <button  className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button  className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
{/* <!-- EDITAR SERVICIOS --> */}
<div  className="modal fade" id="editServiceModal" tabindex="-1">
  <div  className="modal-dialog">
    <div  className="modal-content">
      <div  className="modal-header">
        <h5  className="modal-title">Editar Servicio</h5>
        <button  className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div  className="modal-body">
        <div  className="mb-3">
          <label  className="form-label">Icono</label>
          <input type="text"  className="form-control" value="🚗"/>
        </div>

        <div  className="mb-3">
          <label  className="form-label">Título</label>
          <input type="text"  className="form-control" value="Venta de Autos"/>
        </div>

        <div  className="mb-3">
          <label  className="form-label">Descripción</label>
          <textarea  className="form-control">Autos nuevos y usados</textarea>
        </div>

        <select  className="form-select">
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
      </div>

      <div  className="modal-footer">
        <button  className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button  className="btn btn-primary">Actualizar</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ServicesAdmin
