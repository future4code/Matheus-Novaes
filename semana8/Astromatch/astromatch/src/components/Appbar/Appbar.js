import React from 'react';
import styled from 'styled-components'
 
const AppbarContainer = styled.div `
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid lightgray;
   align-items: center;
   padding: 0 8px;

`

function Appbar(props) {
   return (
    <AppbarContainer>
      
       <button onClick={props.goToChooseProfilePage}> Escolher</button>
       <p>astromatch</p>
       <button onClick={props.goToMatchListPage}>Lista</button>

    </AppbarContainer>
 );
}

export default Appbar
