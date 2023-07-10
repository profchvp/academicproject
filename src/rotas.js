import { BrowserRouter, Route, Routes } from "react-router-dom";
import Negocio from "./pages/negocio/negocio.js"
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/home/home"
function Rotas() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/negocios" element={<Negocio />} />
        </Routes>
    </BrowserRouter>
    )
}
export default Rotas;