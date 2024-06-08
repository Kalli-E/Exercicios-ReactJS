import {Routes, Route} from "react-router-dom"
import { HomePage } from "../pages/home/HomePage";
import { Relogio } from "../pages/relogio/Relogio";
import { PersonagensT5 } from "../pages/listaPersonagens/PersonagensT5";
import { BuscarPersonagens } from "../pages/buscaPersonagens/BuscarPersonagens";
import { Form } from "../pages/form/Form";

export function Rotas(){
    return(
        <Routes>
            <Route path = "/" element = {<HomePage/>}/>
            <Route path = "/relogio" element = {<Relogio/>}/>
            <Route path = "/lista-de-personagens" element = {<PersonagensT5/>}/>
            <Route path = "/buscar-personagens" element = {<BuscarPersonagens/>}/>
            <Route path = "/cadastro" element = {<Form/>}/>
        
        
        
        </Routes>
    )
}