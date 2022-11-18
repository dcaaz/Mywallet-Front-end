import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import LoginPage from "./Pages/LoginPage";
import CadastroPage from "./Pages/CadastroPage";
import RegistrosPage from "./Pages/RegistrosPage";
import EntradaPage from "./Pages/EntradaPage";
import SaidaPage from "./Pages/SaidaPage";
import AuthProvider from "./Ayth";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/cadastro" element={<CadastroPage />}></Route>
                    <Route path="/registros" element={<RegistrosPage />}></Route>
                    <Route path="/entrada" element={<EntradaPage />}></Route>
                    <Route path="/saida" element={<SaidaPage />}></Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}