

const Footer = () => {
  return (
    <div>
         <footer  className=" fw-bold text-center py-3"
          style={{ backgroundColor: "#f8f8f8",
            color: "#d9241e"
       
       }}
         >
             <small>© {new Date().getFullYear()} Finauto · Todos los derechos reservados</small>
        </footer>
    </div>
  )
}

export default Footer
