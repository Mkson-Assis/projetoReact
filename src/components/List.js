import Item from "./Item"

function List() {
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Ferrari" anoLancamento={1985} />
            <Item marca="Fiat" anoLancamento={1964} />
            <Item marca="Renault" />
            <Item marca="Chevrolet" anoLancamento={1999} />
            <Item />
        </ul>
        </>
    )
}

export default List