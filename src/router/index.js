import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Create from "../pages/Create"
import Edit from "../pages/Edit"

function MyRouter(){

    return(
        
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/create"  element={<Create/>} />
            <Route path="/edit/:id"  element={<Edit/>} />
        </Routes>
    )

}

export default MyRouter