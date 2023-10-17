function SeuNome({ setNome }) {
    return (
        <div className="col-12 d-flex justify-content-center">
            <div className="row col-4 d-flex justify-content-center">
                <label htmlFor="name">Digite seu nome</label>
                <input id="name" type="text" className="form-control" placeholder="Digite seu nome..." onChange={(e) => setNome(e.target.value)}></input>
            </div>
        </div>
    )
}

export default SeuNome