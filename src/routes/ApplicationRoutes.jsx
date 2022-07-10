import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sobre from '../pages/Sobre/Sobre'
import Portifolio from '../pages/Portifolio/Portifolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../components/Menu/Menu'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
        <Menu />
        <Portifolio />
        <Comentarios />
            <Routes>
                <Route path="/" element={<Sobre />} />
                <Route path="portifolio" element={<Portifolio />} />
                <Route path="comentarios" element={<Comentarios />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes