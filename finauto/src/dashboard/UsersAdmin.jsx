import React from 'react'

const UsersAdmin = () => {
  return (
    <div>
           {/* <!-- USERS --> */}
      <section id="users" >
        <div  className="d-flex justify-content-between align-items-center mb-3">
        <h3>Usuarios</h3>
        <button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">+ Agregar</button></div>
        <table  className="table table-bordered table-hover text-center align-middle">
          <thead   className="table-dark">
            
          
          <tr>
            <th>ID</th><th>Nombre</th><th>Email</th><th>Rol</th><th>Activo</th><th>Acciones</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td><td>Admin</td><td>admin@test.com</td><td>Admin</td>
            <td><input type="checkbox" name=""/></td>
            <td>
              <button  className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editUserModal">Editar</button>
            </td>
          </tr>
          </tbody>
        </table>
      </section>
      {/* Modals for adding and editing users would go here */}
      <div  className="modal fade" id="userModal" tabindex="-1">
  <div  className="modal-dialog">
    <div  className="modal-content">
      <div  className="modal-header">
        <h5  className="modal-title">Agregar Usuario</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div  className="modal-body">
        <form  className="d-grid gap-3">
          <input  className="form-control" placeholder="Nombre"/>
          <input  className="form-control" placeholder="Email"/>
          <input type="password"  className="form-control" placeholder="Password"/>
          <input type="password"  className="form-control" placeholder="Repeat Password"/>
          <select  className="form-select">
            <option>Admin</option>
            <option>User</option>
          </select>
        </form>
      </div>

      <div  className="modal-footer">
        <button  className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button  className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
{/* Edit User Modal */}
<div  className="modal fade" id="editUserModal" tabindex="-1">
  <div  className="modal-dialog">
    <div  className="modal-content">
      <div  className="modal-header">
        <h5  className="modal-title">Editar Usuario</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div  className="modal-body">
        <form  className="d-grid gap-3">
          <input  className="form-control" value="Admin"/>
          <input  className="form-control" value="admin@test.com"/>
          <input type="password"  className="form-control" placeholder="Password"/>
          <input type="password"  className="form-control" placeholder="Repeat Password"/>
          <select  className="form-select">
            <option selected>Admin</option>
            <option>User</option>
          </select>
        </form>
      </div>

      <div  className="modal-footer">
        <button  className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button  className="btn btn-warning">Actualizar</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default UsersAdmin
