const Testimonials = () => {
  return (
    <>
      <section
        className="py-5 m-3 text-light rounded"
        style={{ backgroundColor: "#d82920" }}
      >
        <div className="container">

          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">Testimonios</h2>

            <button
              className="btn btn-outline-warning"
              data-bs-toggle="modal"
              data-bs-target="#addTestimonialModal"
            >
              ➕ Agregar Testimonio
            </button>
          </div>

          {/* CAROUSEL */}
          <div
            id="testimonialsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >

            {/* INDICATORS */}
            <div className="carousel-indicators">
              <button data-bs-target="#testimonialsCarousel" data-bs-slide-to="0" className="active"></button>
              <button data-bs-target="#testimonialsCarousel" data-bs-slide-to="1"></button>
            </div>

            {/* SLIDES */}
            <div className="carousel-inner">

              {/* SLIDE 1 */}
              <div className="carousel-item active">
                <div className="row g-4">

                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-dark">
                        <p className="fst-italic">
                          “Excelente servicio y precios.”
                        </p>
                        <h6 className="fw-bold mb-0">Juan Pérez</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-dark">
                        <p className="fst-italic">
                          “Compré mi carro aquí y todo perfecto.”
                        </p>
                        <h6 className="fw-bold mb-0">María Gómez</h6>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* SLIDE 2 */}
              <div className="carousel-item">
                <div className="row g-4 ">

                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-dark">
                        <p className="fst-italic">
                          “Muy buena atención y confianza.”
                        </p>
                        <h6 className="fw-bold mb-0">Carlos Díaz</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-dark">
                        <p className="fst-italic">
                          “Recomendado 100%.”
                        </p>
                        <h6 className="fw-bold mb-0">Ana Martínez</h6>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* CONTROLS */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialsCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>
        </div>
      </section>

      {/* MODAL AGREGAR TESTIMONIO */}
      <div className="modal fade" id="addTestimonialModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Agregar Testimonio</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Testimonio</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Mostrar en la web</label>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button className="btn btn-primary">Guardar</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
