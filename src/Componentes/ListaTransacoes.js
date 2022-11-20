import styled from "styled-components"

export default function ListaTransacoes(item) {
    return (
        <Teste>
            <Data>
                <h1>{item.item.dia}</h1>
            </Data>
            <Descricao>
                <h1>{item.item.descricao}</h1>
            </Descricao>
            <Valor>
                <h1>{item.item.valor}</h1>
            </Valor>
        </Teste>
    )
}

const Teste = styled.div`
    display: flex;
    height: 10px;
    margin: 23px 12px 30px 12px;
`

const Data = styled.div`
    margin-right: 10px;
 h1 {
        //color: #C6C6C6;
        color: red;
    }
`

const Descricao = styled.div`
margin-right: 10px;
 h1 {
        color: purple;
    }
`

const Valor = styled.div`
 h1 {
        color: blue;
    }
`