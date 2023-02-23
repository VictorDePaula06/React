import React from "react";
import LogoLRO from "./imgs/logocartao.png"

function topo(){
    return(
        <>
            <section className="header">
                <img className="logo" src={LogoLRO}></img>
                <h1 className="nomeEmpresa">LRO - Limpa,recicla e organiza!</h1>
               
            </section>
        </>

    )
}

export default topo