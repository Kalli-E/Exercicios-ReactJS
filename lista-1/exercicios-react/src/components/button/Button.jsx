import styles from "./button.module.css"

export function BotaoPadrao({valor, onclick}){
    return(
        <>
        <button id="button" className={styles.botaoBase} onClick={onclick}>
            {valor}
        </button>
        </>
    );
}

export function BotaoForm({valor, onclick}){
    return(
        <>
        <button id="button" className={styles.botaoFormulario} onClick={onclick}>
            {valor}
        </button>
        
        </>
    );
}