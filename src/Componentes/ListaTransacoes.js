import styled from "styled-components"

export default function ListaTransacoes(item) {
    let cor = item.item.type;

    return (
        <>
            <Teste>
                <Data>
                    <h1>{item.item.dia}</h1>
                </Data>
                <Descricao>
                    <h1>{(item.item.descricao)}</h1>
                </Descricao>
                <Valor cor={cor}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.item.valor)}
                </Valor>
            </Teste>
        </>
    )
}

const Teste = styled.div`
    display: flex;
    height: 10px;
    margin: 23px 12px 30px 12px;
`

const Data = styled.div`
    width: 48px;
    h1 {
        color: #C6C6C6;
    }
`

const Descricao = styled.div`
    width: 160px;
    h1 {
            color: #000000;
            text-transform: capitalize;
        }
`

const Valor = styled.div`
    width: 62px;
    color: ${props => props.cor === "entrada" ? "#03AC00" : "#C70000"};
`