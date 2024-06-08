import { useState } from "react";
import { BotaoForm } from "../../components/button/Button";

export function Form(){

    const [nome, setNome] = useState ('');
    const [nomeUsuario, setNomeUsuario] = useState ('');
    const [dataNasc, setDataNasc] = useState ('');
    const [email, setEmail] = useState ('');
    const [senha, setSenha] = useState ('');
    
    const [cadastro, setCadastro] = useState(false);

    const handleCadastro = () => {
    console.log ("Cadastro:");
    console.log ("Nome:" + nome);
    console.log ("Nome de usuário:" + nomeUsuario);
    console.log ("Data de nascimento:" + dataNasc);
    console.log ("Email:" + email);
    console.log ("Senha:" + senha);

    setCadastro(true);

    setNome("");
    setNomeUsuario("");
    setDataNasc("");
    setEmail("");
    setSenha("");
    }

    return (
        <>
        <h2>Cadastro de novo usuário</h2>

        <input 
    label="Nome" 
    value={nome} 
    onChange={(event) => setNome(event.target.value)}
    placeholder="Digite seu nome"/> 
    <br/> 
    <br/> 
    <input 
    label="Nome de usuário" 
    value={nomeUsuario} 
    onChange={(event) => setNomeUsuario(event.target.value)}
    placeholder="Digite seu nome de usuário"/>  
     <br/> 
     <br/> 
    <input 
    label="data de nascimento" 
    value={dataNasc} 
    onChange={(event) => setDataNasc(event.target.value)}
    placeholder="Digite sua data de nascimento"
    maxLength={10}/>   
     <br/> 
     <br/> 
<input 
    label="Email" 
    value={email} 
    onChange={(event) => setEmail(event.target.value)}
    placeholder="Digite seu Email"/>  
     <br/> 
     <br/> 
    <input 
    label="Senha" 
    value={senha} 
    onChange={(event) => setSenha(event.target.value)}
    placeholder="Digite uma senha"/>   
    <br/> 
    <br/> 
    <BotaoForm onclick = {() => {handleCadastro(); alert('Cadastro realizado com sucesso!')}} valor = {"Cadastrar"} />   
    <br/> 
    <br/> 

    </>
    )

}