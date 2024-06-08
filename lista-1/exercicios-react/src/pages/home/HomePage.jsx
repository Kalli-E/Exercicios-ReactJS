import {useNavigate} from "react-router-dom";
import { BotaoPadrao } from "../../components/button/Button";

export function HomePage(){
    const navigate = useNavigate();
    

return(
    <>
    <BotaoPadrao onclick={() =>navigate ("/relogio")} valor ={"Relógio digital"}/>
    <br/>
    <br/>
    <BotaoPadrao onclick={()=>navigate ("/lista-de-personagens")} valor = {"Lista de Personagens"}/>
    <br/>
    <br/>
    <BotaoPadrao onclick={() =>navigate ("/buscar-personagens")} valor ={"Buscar Personagem T5"}/>
    <br/>
    <br/>
    <BotaoPadrao onclick={() =>navigate ("/cadastro")} valor ={"Cadastrar novo usuário"}/>
   </>
)

}