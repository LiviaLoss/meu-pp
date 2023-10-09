import { BrowserRouter, Route, Routes } from "react-router-dom"
import AHome from "../pages/AHome/AHome"

function Rotas(){
    

    return(
        <BrowserRouter>
            <Routes>

                <Route index element={<AHome/>}/>


            </Routes>
        </BrowserRouter>
    )
}

export default Rotas