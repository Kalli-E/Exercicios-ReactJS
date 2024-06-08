import { useState } from "react";
import { BotaoPadrao } from "../../components/button/Button";

export function PersonagensT5 (){
    const personagens = [
    { id: 1, nome: "Albedo" },
    { id: 2, nome: "Alhaitham" },
    { id: 3, nome: "Arataki Itto" },
    { id: 4, nome: "Arlecchino" },
    { id: 5, nome: "Baizhu" },
    ]

    const [novoT5, setNovoT5] = useState("");
    const [PersonagensT5, setPersonagensT5] = useState(personagens);

    function adicionarPersonagem(){
        if (novoT5.trim() !==""){

            const novoId = PersonagensT5.lenght+1
            const novo = {
                id: novoId,
                nome: novoT5
            }
            setPersonagensT5 ([...PersonagensT5, novo])
            setNovoT5("")
        }
    }

    return (
    <>
    <h2> Genshin Impact - Lista de personagens Tier 5</h2>
        <ul>
            {PersonagensT5.map((PersonagensT5) =>(
                <li key = {PersonagensT5.id}>{PersonagensT5.nome}</li>))}
        </ul>
        <input placeholder = "Faltam personagens? Digite aqui!" type = "text" maxLength="25" value = {novoT5} onChange = {(e)=>  {setNovoT5(e.target.value);}}/>
        <br/>
        <br/>
        <BotaoPadrao onclick = {adicionarPersonagem} valor={"Adicionar"}/>
        
    </>

    );
}