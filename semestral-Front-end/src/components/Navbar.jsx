import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link className="navbar-brand" to="/"><img src="img/logo.svg" alt="Example Navbar 1" className="mr-2" height="30"/> Color IA</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown-7" aria-controls="navbarNavDropdown-7"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown-7">
                <ul className="navbar-nav">
                <li className="nav-item dropdown mx-2">
                <a className="nav-link" href="#" id="nav-inner-primary_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Consultas</a>
                {sessionStorage.getItem("token") &&
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="nav-inner-primary_dropdown_1">
                    <li><Link className="dropdown-item" to="/regchat" >Realizar Consulta</Link></li>
                    <li><Link className="dropdown-item" to="/listchat" >Listado</Link></li>
                </div>
                }
                </li>
                <li className="nav-item dropdown mx-2">
                <a className="nav-link" href="#" id="nav-inner-primary_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Perfil</a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="nav-inner-primary_dropdown_1">
                {!sessionStorage.getItem("token") && <li><Link className="dropdown-item" to="/register" >Registro</Link></li>}
                {!sessionStorage.getItem("token") &&<li><Link className="dropdown-item" to="/login" >Login</Link></li>}
                {sessionStorage.getItem("token") && <li><Link className="dropdown-item" to="/logout" >Logout</Link></li>}
                </div>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar