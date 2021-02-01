import React from 'react'
import {HeaderS} from '../Header/styles'

class Header extends React.Component {
    render() {
      return (
       
      <HeaderS>
             <h1>Lab Tube</h1>
             <input type="text" placeholder="Busca" id="campoDeBusca" />
      </HeaderS>
      
      );
    }
  }
  export default Header;