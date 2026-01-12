import React from 'react'

const HeroAdmin = () => {
  return (
    <div>
        {/* <section  className="py-5 bg-light text-center"> */}
        
        <section id="hero"  className="content-section " >
        <div  className="d-flex justify-content-between align-items-center mb-3">
        <h3>Hero</h3>
        <button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#heroModal">+ Agregar</button></div>
        <table  className="table table-bordered table-hover text-center align-middle">
          <thead  className="table-dark">
            
         
          <tr>
            <th>ID</th><th>Título</th><th>Imagen</th><th>Activo</th><th>Acciones</th>
          </tr>
           </thead>
           <tbody>
          <tr>
            <td>1</td><td>Venta Especial</td><td>hero.jpg</td>
            <td><input type="checkbox" name=""/></td>
            <td>
              <button  className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editHeroModal">Editar</button>
              <button  className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#">Eliminar</button>

            </td>

          </tr>
          </tbody>
        </table>
      </section>
      {/* Modals for adding and editing hero would go here */  }
      <div  className="modal fade" id="heroModal" tabindex="-1">
  <div  className="modal-dialog">
    <div  className="modal-content">
      <div  className="modal-header">
        <h5  className="modal-title">Hero</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div  className="modal-body">
        <form  className="d-grid gap-3">
          <input  className="form-control" placeholder="Título"/>
          <textarea  className="form-control" placeholder="Descripcion"></textarea>
          <input  className="form-control" type="file"/>
        </form>
      </div>

      <div  className="modal-footer">
        <button  className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button  className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
{/* Edit Hero Modal */}
{/* <!-- EDIT HERO MODAL --> */}
<div  className="modal fade" id="editHeroModal" tabindex="-1" aria-labelledby="editHeroModalLabel" aria-hidden="true">
  <div  className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div  className="modal-content">

      <div  className="modal-header">
        <h5  className="modal-title" id="editHeroModalLabel">Editar Hero</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>

      <form id="editHeroForm">
        <div  className="modal-body">

          {/* <!-- TÍTULO --> */}
          <div  className="mb-3">
            <label  className="form-label">Título principal</label>
            <input
              type="text"
               className="form-control"
              name="title"
              placeholder="Ej: Encuentra tu próximo vehículo"
              required
            />
          </div>

          {/* <!-- SUBTÍTULO --> */}
          <div  className="mb-3">
            <label  className="form-label">Subtítulo</label>
            <input
              type="text"
               className="form-control"
              name="subtitle"
              placeholder="Ej: Autos y motores de calidad garantizada"
            />
          </div>

          {/* <!-- BOTÓN --> */}
          <div  className="mb-3">
            <label  className="form-label">Texto del botón</label>
            <input
              type="text"
               className="form-control"
              name="button_text"
              placeholder="Ej: Ver Autos"
            />
          </div>

          {/* <!-- LINK BOTÓN --> */}
          <div  className="mb-3">
            <label  className="form-label">Link del botón</label>
            <input
              type="text"
               className="form-control"
              name="button_link"
              placeholder="Ej: cars.html"
            />
          </div>

          {/* <!-- IMAGEN --> */}
          <div  className="mb-3">
            <label  className="form-label">Imagen del Hero</label>
            <input
              type="file"
               className="form-control"
              name="image"
              accept="image/*"
            />
          </div>

          {/* <!-- ESTADO --> */}
          <div  className="form-check">
            <input
               className="form-check-input"
              type="checkbox"
              id="heroActive"
              name="active"
              checked
            />
            <label  className="form-check-label" for="heroActive">
              Hero activo
            </label>
          </div>

        </div>

        <div  className="modal-footer">
          <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">
            Cancelar
          </button>
          <button type="submit"  className="btn btn-primary">
            Guardar cambios
          </button>
        </div>
      </form>

    </div>
  </div>
</div>

        
    </div>
  )
}

export default HeroAdmin
