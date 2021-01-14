import React from 'react'
import {InputEmail, InputNome, LabelEmail, LabelNome} from './styled'

    class CadastroPage extends React.Component{
        render () {
            
            return (
                <div>
                   
                   <LabelNome> Digite seu nome</LabelNome>
                   <InputNome/> 
                   <LabelEmail>Digite seu email</LabelEmail>
                   <InputEmail/>
                                         
                    
                </div>
            );
        }
    }


export default CadastroPage