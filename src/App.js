import React from "react";
import Header from "./componentes/Header"
import Corpo from "./componentes/Section";
import Rodape from "./componentes/Footer"
import './App.css'


function app(){

    
    return(
        <>
  
          <Header/>
          <Corpo/>
          <Rodape/>

        </>


    )
       


}

export default app
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     /*Podemos passar os dados como strings ou criar variaveis para 
        chamarmos somente as variaeis 
        
        exemplo 1:
            Canal=' CFB Cursos'
            YouTube=' Youtube/CFBCursos'
            Curso=' React'

        exemplo 2:
          const cnl = ' CFB Cursos'
          const yt = ' Youtube/CFBCursos'
          const crs = ' React'

           <Dados 
            Canal={cnl}
            YouTube={yt}
            Curso={crs}
           />
      */



   