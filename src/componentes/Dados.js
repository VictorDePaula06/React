import React from "react";

function Dados(props){
    let n1 = 7
    let n2 = 7
    let n3 = 7
    return(
        <>
            <section className="infos">
                <h3>Nome: {props.Nome()} </h3>
                <h3>Endereço: {props.Endereço} </h3>
                <h3>CNPJ: {props.CNPJ} </h3>
                <h3>Proprietário: {props.Proprietário} </h3>
            </section>
        </>
    )



}

export default Dados


//<h3>Soma: {'NOTA 1: ' + n1 + 
//' |NOTA 2: ' + n2 + 
//' |NOTA 3: ' + n3 +
//' |MÉDIA: ' + props.Soma(n1,n2,n3)}</h3>
