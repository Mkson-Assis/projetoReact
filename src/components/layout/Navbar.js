import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid col col-lg-8">
                <Link to="/">LOGO</Link>
                <button className="navbar-toggler collapsed shadow-none" data-bs-toggle="collapse" data-bs-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span><img src="" alt="Barra lateral" className="img-barra-lateral"></img></span>
                </button>
                <div className="row collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav d-flex justify-content-end">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/empresa" className="nav-link text-dark">Empresa</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato" className="nav-link text-dark">Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar