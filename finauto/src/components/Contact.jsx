
import contact from "../assets/images/tarjeta.jpeg"
const Contact = () => {
  return (
    <div>
        <section  className="py-5 m-3 text-white rounded" style={{ backgroundColor: "#d82920",
       
       }}>
  <div  className="container  text-white">
    <div  className="text-center mb-5">
      <h2  className="fw-bold">Contáctanos</h2>
     
    </div>

    <div  className="row g-4">

   
      <div  className="col-md-5">
        <h5>Información</h5>
        <p class="fw-bold">📍 Santo Domingo, República Dominicana</p>
        <p class="fw-bold">📞 +1 809-555-1234</p>
        <p class="fw-bold">✉️ contacto@autodealer.com</p>
        <img src={contact} alt=""  style={{
             height: "120px",      
            width: "auto",
            maxHeight: "120px",
             
          }}/>
      </div>

      <div  className="col-md-7" style={{backgroundColor: "#a82920"}}>
        <form  className=" text-light p-4 rounded " style={{backgroundColor: "#a82920"}}>
          <div  className="mb-3">
            <label  className="form-label">Nombre</label>
            <input type="text"  className="form-control" placeholder="Tu nombre"/>
          </div>

          <div  className="mb-3">
            <label  className="form-label">Email</label>
            <input type="email"  className="form-control" placeholder="correo@email.com"/>
          </div>

          <div  className="mb-3">
            <label  className="form-label">Mensaje</label>
            <textarea  className="form-control" rows="4"></textarea>
          </div>

          <button  className="btn btn-warning w-100">
            Enviar Mensaje
          </button>
        </form>
      </div>

    </div>
  </div>
</section>
      
    </div>
  )
}

export default Contact
