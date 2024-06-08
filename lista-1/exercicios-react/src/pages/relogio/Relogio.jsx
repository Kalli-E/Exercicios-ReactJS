
import React,{useState,useEffect} from "react";

export const Relogio = () => {
    const [hora,  setHora] =useState(new Date);

    useEffect(()=> {
      const Idhora = setInterval(() => setHora (new Date ()),500);
      return ()=> clearInterval(Idhora); 
    } , []);


return (

    <div>
        <h1>

        {hora.toLocaleTimeString()}
        </h1>
    </div>
    );
}

