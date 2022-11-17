import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function EntradaPage() {
    const [valorEntrada, setValorEntrada] = useState("");
    const [descricaoEntrada, setDescricaoEntrada] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);
    const navigate = useNavigate();

    function salvarEntrada(e) {
        setDesabilitar(true);
        navigate("/registros");
    }

    return (
        <>
            <Header>
                <h1>Nova Entrada</h1>
            </Header>

            <form onSubmit={salvarEntrada}>
                <Input>
                    <input
                        id="valor"
                        type="number"
                        placeholder="   Valor"
                        onChange={(e) => setValorEntrada(e.target.value)}
                        value={valorEntrada}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        id="descrição"
                        type="text"
                        placeholder="  Descrição"
                        onChange={(e) => setDescricaoEntrada(e.target.value)}
                        value={descricaoEntrada}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Botao>
                    <button
                        type="submit"
                        disabled={desabilitar}
                    >
                        <h1>Salvar entrada</h1>
                    </button>
                </Botao>
            </form>
        </>
    )
}

const Header = styled.div`
    width: 100%;
    height:  31px;
    display: flex;
    align-items: center;
    padding: 25px 18px;
    box-sizing: border-box;
    margin-bottom: 40px;
    h1 {
        color: #FFFFFF;
        font-style: regular;
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
    }
`

const Input = styled.div`
display: flex;
align-items: center;
justify-content: center;
input {
    width: 326px;
    height: 58px;  
    border-radius: 5px;
    border-color:#8C11BE;
    border-style: solid;
    margin-bottom: 13px;
}
input::placeholder{
    color: #000000;
    font-style: regular;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
}
`

const Botao = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 326px;
    height: 46px;  

    margin-bottom: 26px;
    border-radius: 5px;
    border-style: none;
    background-color: #A328D6;

    color: #FFFFFF;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;  
}
`