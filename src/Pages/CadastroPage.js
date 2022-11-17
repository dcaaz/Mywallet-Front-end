import styled from "styled-components";
import Logo from "../Imagem/Logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CadastroPage() {
    const [emailCadastro, setEmailCadastro] = useState("");
    const [senhaCadastro, setSenhaCadastro] = useState("");
    const [nomeCadastro, setNomeCadastro] = useState("");
    const [fotoCadastro, setFotoCadastro] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);

    function cadastrar(e) {
        setDesabilitar(true);
    }

    return (
        <>
            <LogoTipo>
                <img src={Logo} alt="logo" />
            </LogoTipo>

            <form onSubmit={cadastrar}>
                <Input>
                    <input
                        id="nome"
                        type="text"
                        placeholder="   Nome"
                        onChange={(e) => setNomeCadastro(e.target.value)}
                        value={nomeCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        id="email"
                        type="email"
                        placeholder="   E-mail"
                        onChange={(e) => setEmailCadastro(e.target.value)}
                        value={emailCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        id="senha"
                        type="password"
                        placeholder="  Senha"
                        onChange={(e) => setSenhaCadastro(e.target.value)}
                        value={senhaCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>

                <Input>
                    <input
                        id="senha"
                        type="password"
                        placeholder="   Confirme a senha"
                        onChange={(e) => setFotoCadastro(e.target.value)}
                        value={fotoCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Botao>
                    <button
                        type="submit"
                        disabled={desabilitar}>
                        <h1>Cadastrar</h1>
                    </button>
                </Botao>
            </form>

            <Login>
                <Link to="/">
                    <h1>Já tem uma conta? Entre agora!</h1>
                </Link>
            </Login>

        </>

    )
}

const LogoTipo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 95px 0px 28px;
    box-sizing: border-box;
    img{
        width: 147px;
        height: 50px;
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

const Login = styled.div`
display: flex;
align-items: center;
justify-content: center;
vertical-align: top;
vertical-align: #52B6FF;
h1{
    color: #FFFFFF;
    font-style: regular;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;  
}
`