import React from 'react'

const TestimonialsAdmin = () => {
  return (
    <div>
        <section id="testimonials"  className="content-section ">
  <div  className="d-flex justify-content-between align-items-center mb-3">
    <h2>Testimonios</h2>
    <button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTestimonialModal">
      + Agregar
    </button>
  </div>

  <table  className="table table-bordered table-hover text-center align-middle">
    <thead  className="table-dark">
      <tr>
        <th>ID</th>
        <th>Cliente</th>
        <th>Mensaje</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Juan Pérez</td>
        <td>Excelente servicio</td>
        <td>
          <span  className="badge bg-success">Activo</span>
        </td>
        <td>
          <button  className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editTestimonialModal">
            Editar
          </button>
          <button  className="btn btn-secondary btn-sm">
            Desactivar
          </button>
          <button  className="btn btn-danger btn-sm">
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</section>
{/* Modals for adding and editing testimonials would go here */}

<div class="modal fade" id="addTestimonialModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Agregar Testimonio</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label">Nombre del cliente</label>
          <input type="text" class="form-control"/>
        </div>

        <div class="mb-3">
          <label class="form-label">Mensaje</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" checked/>
          <label class="form-check-label">Activo</label>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
{/* <!-- eDITAR TESTIMONIOS   --> */}
<div class="modal fade" id="editTestimonialModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Editar Testimonio</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <input type="hidden"/>

        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" value="Juan Pérez"/>
        </div>

        <div class="mb-3">
          <label class="form-label">Mensaje</label>
          <textarea class="form-control">Excelente servicio</textarea>
        </div>

        <select class="form-select">
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button class="btn btn-primary">Actualizar</button>
      </div>
    </div>
  </div>
</div>

</div>
  )
}

export default TestimonialsAdmin
