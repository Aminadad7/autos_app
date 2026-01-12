
import about from "../assets/images/logo2.png"
const About = () => {
  return (
    <div>
        <section  className="py-5">
  <div  className="container">
    <div  className="row align-items-center g-5">
      
      <div  className="col-md-6">
        <img src={about}  className="img-fluid rounded shadow" alt="Nosotros"/>
      </div>

      <div  className="col-md-6">
        <h2  className="fw-bold">¿Quiénes Somos?</h2>
        <p  className="text-muted">
          
          <strong>FINAUTO </strong>es el dealer líder en la región Este, reconocido por su
sólida trayectoria y compromiso con la calidad y la
satisfacción del cliente. Ofrecemos una amplia gama de
vehículos de marcas prestigiosas, respaldados por un servicio
integral que incluye asesoría especializada, financiamiento
flexible y mantenimiento postventa de alto nivel. Nuestra
gestión está orientada a la innovación continua, la
transparencia y la responsabilidad social. De esta manera  
consolidando relaciones comerciales duraderas y que
contribuyan al desarrollo sostenible del sector automotriz y la
comunidad en la que operamos
        </p>
        <p>
          Nuestro compromiso es brindarte confianza, transparencia
          y el mejor servicio post-venta del mercado.
        </p>

        <ul  className="list-unstyled">
          <li>✔ Consolidar la posición de liderazgo en la región Este mediante
la ampliación de la cartera de clientes y un incremento
sostenido en las ventas anuales</li>
          <li>✔ Diversificar la oferta de vehículos y servicios incorporando
nuevas marcas y soluciones innovadoras que respondan a las
tendencias del mercado automotriz</li>
          <li>✔ Impulsar la innovación tecnológica en la gestión comercial y
operativa para incrementar la eficiencia y la calidad en la
prestación de servicios</li>
        </ul>
      </div>

    </div>
  </div>
</section>
      
    </div>
  )
}

export default About
