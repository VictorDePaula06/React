import React from "react";
import logoEmail from "./imgs/logo_email.png"
import logoZap from "./imgs/logo_wpp.png"

function rodape(){
    return(
        <>
            <section className="container">
                <img src={logoEmail}></img><a className="link" href="#" target='_blank'>J.17jvictor@gmail.com</a>
                <img src={logoZap}></img><a className="link" href="#" target='_blank'>(21)982626387</a>
              
            </section>
            <h4 className="dev"> Desenvolvido por João Victor de Paula &copy;</h4>
        </>

    )


}

export default rodape