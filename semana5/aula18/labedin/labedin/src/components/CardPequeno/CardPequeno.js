import React from 'react'
import {CardPequenoConteiner} from './style'

const CardPequeno = (props) => { 
    
        return (
            <CardPequenoConteiner>
             <div>
                <p> 
                    <img src={props.imagem}  />
                    <strong>{props.TipoDeInfo}</strong>{props.DescricaoDaInfo}
                
                </p>
             </div>
            </CardPequenoConteiner>
        )         
                
 }


export default CardPequeno 