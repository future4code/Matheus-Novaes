import axios from 'axios';
import React from 'react'
import CadastroPage from './components/cadastroPage'
import ListaPage from './components/listaPage'

class App extends React.Component{
    state= {
      pagina:'cadastro'

    }
    
    mostrarCadastro = () => {
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
        headers:{
          Authorization:'matheus-novaes-epps'
        }
      }).then(resposta=>{
        this.setState({
          cadastrados:resposta.data  
        }).catch(error=>{console.log(error)})
      })
    }

    buttonChangeList = () => {
        if (this.state.pagina === 'cadastro'){
           this.setState ({pagina:'lista'})
        }else{
            this.setState({pagina:'cadastro'})
        }
        
    }
    
    render (){


      return (
        <div>
            <div><button onClick = {this.buttonChangeList}> Mostrar Lista </button></div>
            {this.state.pagina === 'cadastro'?
             
           (<div> <CadastroPage/> </div>):
           (<div> <ListaPage/> </div>) }
       </div>
      );
}

}

export default App