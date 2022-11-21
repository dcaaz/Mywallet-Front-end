import styled from "styled-components";
import Logo from "../Imagem/Logo.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Ayth";
import { useContext, useState } from "react";

export default function LoginPage() {

    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);
    const navigate = useNavigate();

    const { setToken } = useContext(AuthContext);

    function logar(e) {
        e.preventDefault();

        setDesabilitar(true);

        const URL = "http://localhost:5000/login";

        const body = {
            email: emailLogin,
            senha: senhaLogin
        }

        const promise = axios.post(URL, body);

        promise.then((res) => {
            console.log("deu certo a res", res);
            setToken(res.data.token);
            navigate("/registros");
        })

        promise.catch((erro) => {
            console.log("erro pagina de cadastro", erro.response.data);
            alert(erro.response.data.message);
            setDesabilitar(false);
        })
    }

    return (
        <>
            <LogoTipo>
                <img src={Logo} alt="logo" />
            </LogoTipo>

            <form onSubmit={logar}>
                <Input>
                    <input
                        id="email"
                        type="email"
                        placeholder="   E-mail"
                        onChange={(e) => setEmailLogin(e.target.value)}
                        value={emailLogin}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        id="senha"
                        type="password"
                        placeholder="  Senha"
                        onChange={(e) => setSenhaLogin(e.target.value)}
                        value={senhaLogin}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Botao>
                    <button
                        type="submit"
                        disabled={desabilitar}
                    >
                        <h1>Entrar</h1>
                    </button>
                </Botao>
            </form>

            <Cadastro>
                <Link to="/cadastro">
                    <h1>Primeira vez? Cadastre-se!</h1>
                </Link>
            </Cadastro>
        </>
    )
}


const LogoTipo = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 159px 0px 24px;
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

const Cadastro = styled.div`
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