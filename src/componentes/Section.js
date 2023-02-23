import React from "react";
import Image from "./imgs/trab1.jpg";
import Image2 from "./imgs/trab2.jpg"
import Dados from "./Dados";


function corpo(){

    const nome=()=>{
        return " LRO - Limpa,Recicla e Organiza"
    }
    const end = " Rua Sargento Antonio ernesto - Pavuna"
    const cnpj = " 11122222235489"
    const propie = " João Claúdio"
  //  const somar=(n1,n2,n3)=>{
  //      return (n1+n2+n3)/3
  //  }


    return(
        <>
            <section className="sobreEmpresa">
                <h1>Estamos na área da demolicão civil a 5 anos e a cada anos crescemos mais no mercado</h1>
                <h1>Já trabamos com diversas empresas como Bradesco, Santander, Athie wohnrath e podemos fazer tambem parceria 
                    com sua empresa
                </h1>
            </section>    
            <div className="image">
                <img className="imagens" src={Image}></img>
            </div>
            <div className="formulario">
                <h2>Entre em contato conosco</h2>
                <label for="name"></label>
                <input className="inp" type={"Text"} id="name" placeholder="Nome Completo"></input>
                <input className="inp" type={"Email"} id="email" placeholder="Endereço de Email"></input>
                <input className="inp" type={"message"} id="mensagem" placeholder="Sua mensagem"></input>
                <input className="inp" type={"submit"} id="enviar"></input>

            </div>
            
               
         

            <Dados
                Nome={nome}
                Endereço={end}
                CNPJ={cnpj}
                Proprietário={propie}
            
            />
           
        </>
    )
}

export default corpo