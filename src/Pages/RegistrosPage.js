import styled from "styled-components";
import Seta from "../Imagem/Seta.png";
import SetaEntrada from "../Imagem/Entrada.png";
import SetaSaida from "../Imagem/Saida.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Ayth";
import axios from "axios";
import ListaTransacoes from "../Componentes/ListaTransacoes";

export default function RegistrosPage() {

    const [transacao, setTransacao] = useState([]);
    const [saldo, setSaldo] = useState(0);

    const { token, setNome, nome } = useContext(AuthContext);

    useEffect(() => {
        const url = "http://localhost:5000/registros";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(url, config);

        promise.then((res) => {
            setNome(res.data.usuario.nome);
            setTransacao(res.data.transacao);
            soma(res.data.transacao);
        });

        promise.catch((erro) => {
            console.log("erro pagina registros", erro.response.data);
            alert(erro.response.data.message);
        })
    }, [token, setNome]);

    function soma(res) {
        let soma = 0;

        for (let i = 0; i < res.length; i++) {
            if (res[i].type === "saida") {
                soma = soma - Number(res[i].valor)
            }
            if (res[i].type === "entrada") {
                soma = soma + Number(res[i].valor)
            }
        }

        soma.toFixed(2);

        setSaldo(soma);
    }

    return (
        <Roxo>
            <Header>
                <h1>Olá, {nome}</h1>
                <Link to="/">
                    <img src={Seta} alt="retornar para login" />
                </Link>
            </Header>
            <Registros>
                {(transacao.length === 0)
                    ?
                    (<SemRegistros>Não há registros de entrada ou saída</SemRegistros>)
                    :
                    (
                        <>
                            <InfosTransf>
                                {transacao.map((item, i) => <ListaTransacoes item={item} key={i} />)}
                            </InfosTransf>
                            <Saldo cor={saldo}>
                                <h1>SALDO</h1>
                                <h2>
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(saldo)}
                                </h2>
                            </Saldo>
                        </>
                    )
                }
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
                        <h1>Nova saída</h1>
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
    overflow: auto;
`

const SemRegistros = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    width: 180px;
    height: 100%;
    color: #868686;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.48px;
`

const InfosTransf = styled.div`  
    h1{
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
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

const Saldo = styled.div` 
    display: flex;
    margin-left: 12px;
    justify-content: space-between;
    h1{
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
    }
    h2{
        margin-right: 43px; 
        font-size: 17px;
        font-weight: 400;
        line-height: 19px;
        color: ${props => props.cor >= 0 ? "#03AC00" : "#C70000"};
    }
`