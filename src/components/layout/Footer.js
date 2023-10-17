import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
                    ><FaFacebook /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
                    ><FaInstagram /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
                    ><FaLinkedin /></a>
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