import { useState } from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div className="col-12 d-flex justify-content-center">
            <form onSubmit={cadastrarUsuario} className="row d-flex justify-content-center">
                <h1 className="text-center">Meu cadastro:</h1>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="row col-4">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" className="form-control" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="row col-4">
                    <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" className="form-control" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="row d-flex justify-content-center text-center mt-3">
                    <div className="col-5">
                        <button type="submit" className="btn btn-success">Cadastrar!</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form