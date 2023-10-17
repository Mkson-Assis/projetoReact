function Saudacao({ nome }) {
    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}! Tudo bem?`
    }

    return (
        <>
        {nome && (
            <>
            <div className='col-12 d-flex justify-content-center mt-5'>
                <div className='row col-4 d-flex justify-content-center text-center'>
                    <h3>Saudação</h3>
                </div>
            </div>
            <div className='col-12 d-flex justify-content-center'>
                <div className='row col-4 d-flex justify-content-center'>
                    <p className='text-center'>{gerarSaudacao(nome)}</p>
                </div>
            </div>
            </>
        )}
        </>
    )
}

export default Saudacao