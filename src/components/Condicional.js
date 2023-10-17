import { useState } from "react"

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e) {
        e.preventDefault()
        setUserEmail('')
    }

    return (
        <div className="col-12 d-flex justify-content-center">
            <form className="row col-12 d-flex justify-content-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-3">
                        <label>Cadastre seu e-mail</label>
                        <input type="email" className="form-control" placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-3 d-flex justify-content-center">
                        <button type="submit" className="btn btn-success" onClick={enviarEmail}>Enviar e-mail</button>
                    </div>
                </div>
                {userEmail && (
                    <>
                        <div className="row d-flex justify-content-center mt-5">
                            <div className="d-flex justify-content-center">
                                <p className="text-center">O e-mail do usuário é: {userEmail}</p>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-3 d-flex justify-content-center">
                                <button className="btn btn-danger" onClick={limparEmail}>Limpar e-mail</button>
                            </div>
                        </div>
                    </>
                )}
            </form>
        </div>
    )
}

export default Condicional