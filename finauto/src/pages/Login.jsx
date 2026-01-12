
const Login = () => {
  return (
    <section className="min-vh-100 d-flex justify-content-center align-items-center"
    
  >
      <div className="fondo container ">
        <div className=" row justify-content-center">
          
          <div className="fondo-content col-12 col-sm-10 col-md-6 col-lg-4 hero">
            <div className="card shadow-lg border-0 rounded-4 p-4 m-5 ">

              {/* Título */}
              <div className="text-center mb-4 mt-0.5">
                <h2 className="fw-bold">ADMIN</h2>
                <h4 className="text-muted font-mono">
                  Inicia sesión para continuar
                </h4>
              </div>

              {/* Formulario */}
              <form className="form ">
                <div className="mb-1 mx-3 ">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="admin@email.com"
                  />
                </div>

                <div className="mb-1 mx-3">
                  <label className="form-label fw-semibold">Contraseña</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="••••••••"
                  />
                </div>

                <div className="d-grid mt-4 mx-3">
                  <button className="btn btn-success btn-lg">
                    Entrar
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Login;
