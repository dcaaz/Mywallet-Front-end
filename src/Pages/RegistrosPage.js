import styled from "styled-components";
import Seta from "../Imagem/Seta.png";
import SetaEntrada from "../Imagem/Entrada.png";
import SetaSaida from "../Imagem/Saida.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Ayth";

export default function RegistrosPage() {

    const { token } = useContext(AuthContext);

    useEffect(() => {
        const url = "http://localhost:5000/registros";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(url, config);

        promise.then((res) => {
            console.log("res registros", res)
        });

        promise.catch((erro) => {
            console.log("erro pagina registros", erro.response.data);
            alert(erro.response.data.message);
        })
    }, [token, check]);

    return (
        <Roxo>
            <Header>
                <h1>Olá, fulano</h1>
                <Link to="/">
                    <img src={Seta} alt="retornar para login" />
                </Link>
            </Header>
            <Registros>
                <h1>Não há registros de entrada ou saída</h1>
            </Registros>
            <Nova>
                <Link to="/entrada">
                    <Entrada>
                        <img src={SetaEntrada} alt="Registrar nova entrada" />
                        <h1>Nova entrada</h1>
                    </Entrada>
                </Link>
                <Link to="/saida">
                    <Saida>
                        <img src={SetaSaida} alt="Registrar nova saida" />
                        <h1>Nova entrada</h1>
                    </Saida>
                </Link>
            </Nova>
        </Roxo>
    )
}

const Roxo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Header = styled.div`
    height:  31px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 18px;
    box-sizing: border-box;
    h1 {
        color: #FFFFFF;
        font-style: regular;
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
    }
    img {
        width: 23px;
        height: 24px;
    }
`

const Registros = styled.div`
    width: 326px;
    height: 446px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-top: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        width: 180px;
        height: 46px;
        color: #868686;
        font-style: regular;
        font-size: 20px;
        font-weight: 400;
        line-height: 23.48px;
    }
`

const Nova = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 13px;
    width: 330px;
`

const Entrada = styled.div`
    width: 156Px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    padding-left: 10px;
    box-sizing: border-box;
    img{
        margin-top: 9px;
        width: 25px;
        height: 25px;
    }
    h1{
        margin-top: 31px;
        width: 64px;
        height: 40px;
        color: #FFFFFF;
        font-style: regular;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
    }
`

const Saida = styled.div`
    width: 156Px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    padding-left: 10px;
    box-sizing: border-box;
    img{
        margin-top: 9px;
        width: 25px;
        height: 25px;
    }
    h1{
        margin-top: 31px;
        width: 64px;
        height: 40px;
        color: #FFFFFF;
        font-style: regular;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
    }
`