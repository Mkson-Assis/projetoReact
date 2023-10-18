import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
                    ><FaFacebook /></Link>

                    <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
                    ><FaInstagram /></Link>

                    <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
                    ><FaLinkedin /></Link>
                </section>
            </div>

            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2020 Copyright:
                <a className="text-white" href="/">Marckson</a>
            </div>
        </footer>
    )
}

export default Footer